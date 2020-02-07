/**
 * 节流函数
 * @param { function } fn   //传入回调函数 
 * @param { number } time   //传入节流时间
 * @returns 返回一个函数
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