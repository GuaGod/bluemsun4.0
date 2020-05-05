import ErrorManager from './core/ErrorManger'

ErrorManager.install = function(Vue, options) {
    Vue.prototype.$ErrorManager = ErrorManager;
}

export default ErrorManager