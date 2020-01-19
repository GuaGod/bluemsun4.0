import controller from './controller'
import Lock from '@/helpers/Lock.js'
import { mapActions } from 'vuex'

export default {
    props: {
      isShow: {
        type: Boolean,
        default: false,
        validator: function(newValue) {

          return true;
        }
      }
    },
    data() {
      return {
        username: '',
        password: '',
      }
    },
    mounted() {
      this.loginLock = new Lock();
      this.verify = this.$Verify.create([
        {
          name: 'username',
          rules: [
            {
              verify: /./,
              errorMsg: '用户名不能为空'
            }
          ]
        }, 
        {
          name: 'password',
          rules: [
            {
              verify: /./,
              errorMsg: '密码不能为空'
            }
          ]
        }
      ]);
    },
    methods: {
      ...mapActions('common/', ['setUserId', 'setUsername', 'setStateCode', 'setHeadUrl']),
      onClickCloseLoginLayer() {
        this.$emit('close');
      },
      loginDataVerify({username, password}) {
        let verifyResult = this.verify.verify({
          username: username,
          password: password,
        })

        return verifyResult;
      },

      handleVerifyData(verifyResult) {
        let isSuccess = true;
        for(let key in verifyResult) {
          if(verifyResult.hasOwnProperty(key)) {
            if(!verifyResult[key].success) {
              isSuccess = false;
              for(let item of verifyResult[key].resultList.values()) {
                this.$Message.error(item);
              }
            }
          }
        }

        return isSuccess;
      },
      
      setLoginData(data) {
        this.setUserId(data.userId);
        this.setUsername(data.username);
        this.setStateCode(data.stateCode);
        this.setHeadUrl(data.headUrl);
      },

      onClickLogin() {
        if(this.loginLock.isLock) {
          return ;
        }

        this.loginLock.setLock(2000);
        let username = this.username;
        let password = this.password;

        let verifyResult = this.loginDataVerify({
          username: username,
          password: password
        });
        
        let isSuccess = this.handleVerifyData(verifyResult);
        
        if(!isSuccess) {
          return ;
        }

        controller.login({
          username,
          password
        }).then((result) => {
          console.log(result);
          if(!result.success) {
            this.$Message.error(result.message);
            return ;
          }

          this.$Message.info(result.message);
          this.setLoginData(result.data);
        }).catch(error => {
          this.$Message.error('系统出错，请稍后重新尝试！');
        }).finally(() => {
          this.loginLock.cancelLock();
        })
      }
    }
  };