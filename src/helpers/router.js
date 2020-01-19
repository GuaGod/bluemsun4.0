function addBaseUrl(base, routes) {
    routes.forEach((item) => {
        if(item.path != null) {
            let length = item.length;
            if(item.path[length - 1] === '/') {
                item.path = item.path.split('').slice(0, length - 2).join('')
            }
            item.path = `${base}/${item.path}`
        }
    })

    return routes;
}

export {
    addBaseUrl
}