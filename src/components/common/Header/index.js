import { mapState } from "vuex"
import ManagerMenu from "./components/ManagerMenu/index.vue"
import UnLoginMenu from "./components/UnLoginMenu/index.vue"
import UserMenu from "./components/UserMenu/index.vue"
import LoginLayer from '../LoginLayer/index.vue'

export default {
  props: {
    state: {
      type: String,
      default: "active"
    }
  },
  data() {
    return {
      currentMenu: "UnLoginMenu",
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
        state = state.common.stateCode;
        let currentMenu;
        switch (stateCode) {
          case 0:
            currentMenu = "UnLoginMenu";
            break;
          case 1:
            currentMenu = "UserMenu";
            break;
          case 2:
            currentMenu = "UserMenu";
            break;
          default:
            currentMenu = "UnLoginMenu";
        }

        this.currentMenu = currentMenu;
        return state;
      },
      headUrl: state => {
        return state.common.headUrl;
      }
    })
  },
  mounted: function() {
    this.headerState = this.state;
    let headerState = this.headerState;
    //获取初始状态，如果初始状态为激活态，则不绑定事件
    if (headerState === "init") {
      this.bindScrollEvent();
    }
  },

  methods: {
    onClickApplication() {},
    onClickBlogs() {},
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
    bindScrollEvent() {
      let timer = null;
      window.addEventListener("scroll", () => {
        if (timer === null) {
          timer = setTimeout(() => {
            let positionHeight = document.documentElement.scrollTop;
            if (positionHeight <= 300) {
              this.headerState = "init";
            } else {
              this.headerState = "active";
            }
            timer = null;
          }, 250);
        } else {
          return false;
        }
      });
    }
  },
  components: {
    ManagerMenu,
    UnLoginMenu,
    UserMenu,
    LoginLayer,
  },
}