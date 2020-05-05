/**
 * 防抖函数
 * @param { function } fn   //传入回调函数 
 * @param { number } time   //传入防抖时间
 * @returns 返回一个函数
 */
export default function debounce(fn, time) {
    let timer = null;

    return function(...args) {
        if(timer !== null) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, time)
    }
}