/**
 * 节流函数
 */

export default (fn, time) => {
    let timer = null;
    return function(...args) {
        if(timer !== null) return;
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, time)
    }
}