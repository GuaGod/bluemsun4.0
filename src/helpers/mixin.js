/**
 * 混入函数
 * @param { object } base 基对象，将把后面对象的属性混入到基对象中 
 * @param  { array[object] | object } objs 一个数组或一个对象，其中的属性将混入base中
 * @returns { void }
 */
function mixin(base, ...objs) {
    for(let i = 0, length = objs.length; i < length; i++) {
        let obj = objs[i];
        for(let property in obj) {
            if(obj.hasOwnProperty(property)) {
                base[property] = obj[property];
            }
        }
    }
}

module.exports = {
    mixin
}