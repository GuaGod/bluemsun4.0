import { mapState } from "vuex"
import ManagerMenu from "./components/ManagerMenu/ManagerMenu.vue"
import UnLoginMenu from "./components/UnLoginMenu/UnLoginMenu.vue"
import UserMenu from "./components/UserMenu/UserMenu.vue"
import LoginLayer from '../LoginLayer/LoginLayer.vue'

export default {
  props: {
    state: {
      type: String,
      default: "active"
    },
    hasSwitch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCurrentMenuShow: false,
      headerState: 'active',
      isLoginLayerShow: false,
    };
  },
  computed: {
    ...mapState({
      username: state => {
        return state.common.username;
      },
      stateCode: state => {
        return state.common.stateCode;
      },
      headUrl: state => {
        return state.common.headUrl;
      }
    }),
    currentMenu() {
      let currentMenu;
      switch (this.stateCode) {
        case 0:
          currentMenu = "UnLoginMenu";
          break;
        case 1:
          currentMenu = "UserMenu";
          break;
        case 2:
          currentMenu = "UserMenu";
          break;
        case 3:
          currentMenu = 'ManagerMenu';
          break;
        default:
          currentMenu = "UnLoginMenu";
      }

      return currentMenu;
    }
  },
  mounted: function() {
    this.headerState = this.state;
    let headerState = this.headerState;
    //获取初始状态，如果初始状态为激活态，则不绑定事件
    if (this.hasSwitch === "init") {
      this.bindScrollEvent();
    }
  },

  beforeDestoryed: function() {
    window.removeEventListener('scroll', this._switchScroll);
  },

  methods: {
    onClickApplication() {
      this.$router.push('/application');
    },
    onClickBlogs() {
      this.$router.push('/blog/forum');
    },
    onClickNews() {},
    onClickProductions() {},
    onClickUserHead() {
      this.isCurrentMenuShow = !this.isCurrentMenuShow;
    },
    onClickLogin() {
      this.isLoginLayerShow = true;
      this.isCurrentMenuShow = false;
    },
    onClickCloseLoginLayer() {
      this.isLoginLayerShow = false;
    },
    onHandleLoginSuccess() {
      this.isLoginLayerShow = false;
      
      console.log(this.username, this.stateCode, this.headUrl);
      console.log(this.currentMenu)
    },
    bindScrollEvent() {
      function switchScroll() {
        let positionHeight = document.documentElement.scrollTop;
        if (positionHeight <= 300) {
          this.headerState = "init";
        } else {
          this.headerState = "active";
        }
      }

      this._switchScroll = switchScroll; 

      window.addEventListener('scroll', throttle(switchScroll));
    }
  },
  components: {
    ManagerMenu,
    UnLoginMenu,
    UserMenu,
    LoginLayer,
  },
}