import Verify from '../../core/Verify'

let usernameRule = {
    name: 'username',
    rules: [
        {
            verify: /^.{6,18}$/,
            errorMsg: '长度错误'
        },
        {
            verify: /abc/,
            errorMsg: '必须包含abc'
        }
    ]
};

let passwordRule = {
    name: 'password',
    rules: [
        {
            verify: /^.{6,18}$/,
            errorMsg: '长度错误'
        }
    ]
};

describe('addRule', () => {
    let verify = null;
    beforeEach(() => {
        verify = new Verify();
    })

    afterEach(() => {
        verify = null;
    })

    it('第一参数传入一个rule数组', () => {
        let rules = [usernameRule, passwordRule];

        verify.addRule(rules);
        
        expect(verify.rules).toEqual(rules);
    })

    it('传入两个值', () => {
        verify.addRule(usernameRule, passwordRule);

        expect(verify.rules).toEqual([usernameRule, passwordRule]);
    })

    it('多次addRule', () => {
        verify.addRule(usernameRule);
        verify.addRule(passwordRule);

        expect(verify.rules).toEqual([usernameRule, passwordRule]);
    })

    it('传入非法rule数组', () => {
        verify.addRule([{
            rules: [{
                verify: /^.{6,18}$/,
                errorMsg: '长度错误'
            }]
        }]);

        expect(verify.rules).toEqual([]);
    });

    it('传入非法rule', () => {
        verify.addRule(usernameRule, {
            rules: [{
                verify: /^.{6,18}$/,
                errorMsg: '长度错误'
            }]
        });

        expect(verify.rules).toEqual([]);
    })
})

describe('verify', () => {
    let verify = null;
    beforeEach(() => {
        verify = new Verify([usernameRule, passwordRule]);
    })

    afterEach(() => {
        verify = null;
    })

    it('通过案例', () => {
        let result = verify.verify({
            username: 'abc123123',
            password: '1231244'
        });

        expect(result).toEqual({
            username: {
                success: true,
                resultList: []
            },
            password: {
                success: true,
                resultList: []
            }
        })
    })

    it('失败案例1', () => {
        let result = verify.verify({
            username: '123123',
            password: '1231244'
        });

        
        expect(result).toEqual({
            username: {
                success: false,
                resultList: ['必须包含abc']
            },
            password: {
                success: true,
                resultList: []
            }
        })
    })

    it('失败案例2', () => {
        let result = verify.verify({
            username: '123',
            password: '1231244'
        });

        
        expect(result).toEqual({
            username: {
                success: false,
                resultList: ['长度错误', '必须包含abc']
            },
            password: {
                success: true,
                resultList: []
            }
        })
    })
})