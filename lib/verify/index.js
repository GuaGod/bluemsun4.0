import Verify from './core/Verify'

Verify.install = function(Vue, options) {
    Vue.prototype.$Verify = Verify;
}
export default Verify