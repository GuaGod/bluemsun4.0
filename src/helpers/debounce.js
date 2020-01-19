/**
 * 防抖函数
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