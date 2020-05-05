import verifyRules from './createVerify.js'
import Service from './service.js'

export default {
    data() {
        return {
            formData: {
                name: '',
                major: '',
                sex: 'male',
                grade: '',
                age: '',
                studentId: '',
                iphone: '',
                qq: '',
                email: '',
                dormitory: '',
                introduction: '',
                skill: '',
            }
        }
    },
    created() {
        //创建表单提交所需要的验证器
        this._verify = this.$Verify.create(verifyRules);
        //创建访问后端的服务对象
        this._service = new Service();
    },
    method: {
        onClickSubmit() {
            let that = this;
            async function flow() {
                let verifyResult = that._verifyData();
                let isSuccess = that._handleVerifyResult(verifyResult);
                if(!isSuccess) {
                    return ;
                }
                
            }
        },

        _verifyData() {
            let verifyResult = this.verify.verify(this.formData)

            return verifyResult;
        },

        _handleVerifyResult(verifyResult) {
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
        }
    }
}