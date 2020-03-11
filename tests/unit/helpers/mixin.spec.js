import { mixin } from '../../../src/helpers/mixin.js'

describe('测试混入函数', () => {
    it('混入无重复属性的对象', () => {
        let oldObj = {
            name: 'oldObj'
        };
        let newObj = {
            from: 'Los'
        };

        mixin(oldObj, newObj);
        expect(oldObj.name).toBe('oldObj');
        expect(oldObj.from).toBe('Los');
    })

    it('混入有重复属性的对象，新对象将覆盖旧对象的重名属性', () => {
        let oldObj = {
            name: 'oldObj'
        };
        let newObj = {
            name: 'newObj'
        };;

        mixin(oldObj, newObj);
        expect(oldObj.name).toBe('newObj');
    })

    it('混入多个对象，后面的对象将覆盖前面对象的同名属性', () => {
        let oldObj = {
            name: 'oldObj'
        }

        let newObj1 = {
            name: 'newObj1',
            sex: 'male'
        }

        let newObj2 = {
            from: 'Los'
        }

        mixin(oldObj, newObj1, newObj2);
        expect(oldObj.name).toBe('newObj1');
        expect(oldObj.sex).toBe('male');
        expect(oldObj.from).toBe('Los')
    })
})