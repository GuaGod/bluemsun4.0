import { addBaseUrl } from '../../../src/helpers/router.js'

describe('addBaseUrl函数测试', () => {
    it('routes数组中每个路径的前面会添加baseUrl', () => {
        let routes = [
            {path: 'news'},
            {path: 'notice'}
        ]
        let baseUrl = 'manage';
        addBaseUrl(baseUrl, routes);

        let resultRoutes = [
            {path: `${baseUrl}/news`},
            {path: `${baseUrl}/notice`}
        ]

        for(let i = 0, length = routes.length; i < length; i++) {
            expect(routes[i].path).toBe(resultRoutes[i].path);
        }
    })
})