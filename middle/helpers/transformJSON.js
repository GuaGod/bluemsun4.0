function transfromJ2F(json) {
    const formData = new FormData();
    let obj = json;
    if(typeof json === 'string') {
        obj = JSON.parse(json);
    }
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            formData.append(key, obj[key]);
        }
    }

    return formData;
}

function transfromF2J(formData) {
    let jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    })

    return jsonData;
}

module.exports = {
    transfromJ2F,
    transfromF2J
}