import { isArray, isRule } from '../../helpers/judge.js'

describe('isArray', () => {
    it('输入一个空数组', () => {
        expect(isArray([])).toBe(true);
    })

    it('输入一个有内容的数组', () => {
        expect(isArray([1, 2])).toBe(true);
    })

    it('输入一个数字', () => {
        expect(isArray(123)).toBe(false);
    })
})

describe('isRule', () => {
    it('输入一个正确的用例', () => {
        let rule = {
            name: 'username',
            rules: [{
                verify: /^.{6, 18}$/,
                errorMsg: '用户名长度错误'
            }]
        }

        expect(isRule(rule)).toBe(true);
    })

    it('输入不包含rules的用例', () => {
        let rule = {
            name: 'username'
        }

        expect(isRule(rule)).toBe(false);
    })

    it('输入不包含name的用例', () => {
        let rule = {
            rules: [{
                verify: /^.{6, 18}$/,
                errorMsg: '用户名长度错误'
            }]
        }

        expect(isRule(rule)).toBe(false);
    })

    it('输入rules规则错误的用例', () => {
        let rule = {
            name: 'username',
            rules: [{
                errorMsg: '用户名长度错误'
            }]
        }

        expect(isRule(rule)).toBe(false);
    })
})
