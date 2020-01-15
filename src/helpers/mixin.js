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