function mapProperty(baseObj, map, needRest = true) {
    let newObj = {};

    for(let property in baseObj) {
        if(baseObj.hasOwnProperty(property)) {
            newObj[property] = baseObj[property];
        }
    }

    for(let property in map) {
        if(map.hasOwnProperty(property)) {
            newObj[property] = baseObj[map[property]];

            if(property !== map[property]) {
                delete newObj[map[property]];
            }
        }
    }

    if(!needRest) {
        for(let property in newObj) {
            if(!map.hasOwnProperty(property)) {
                delete newObj[property];
            }
        }
    }

    return newObj;
}

module.exports = {
    mapProperty
}