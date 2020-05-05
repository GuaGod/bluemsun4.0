/**
 * 为一个数组中所有对象的path属性，前面添加一个公共的基础路径
 * @param { string } base 基地址，routes数组中每个元素的地址将被修改为base + routes[i].path
 * @param { array } routes 路径数组，每个元素是一个包含path属性的对象，每个元素的path属性将被修改
 *                         为base + routes[i].path
 */
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