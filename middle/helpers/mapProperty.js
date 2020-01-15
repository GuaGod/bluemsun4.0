function mapProperty(baseObj, map) {
    let newObj = {};

    for(let property in baseObj) {
        if(baseObj.hasOwnProperty(property)) {
            newObj[property] = baseObj[property];
        }
    }

    for(let property in map) {
        if(map.hasOwnProperty(property)) {
            newObj[property] = baseObj[map[property]];

            delete newObj[map[property]];
        }
    }

    return newObj;
}

module.exports = {
    mapProperty
}