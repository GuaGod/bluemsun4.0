function isArray(args) {
    return Object.prototype.toString.call(args) === '[object Array]';
}

function isRule(rule) {
    if(!isArray(rule.rules)) {
        return false;
    }

    if(rule.name === undefined) {
        return false;
    }

    for(let i = 0, length = rule.rules.length; i < length; i++) {
        let _rule = rule.rules[i];

        if(_rule.verify === undefined) {
            return false;
        }

    }

    return true;
}

export {
    isArray,
    isRule,
}