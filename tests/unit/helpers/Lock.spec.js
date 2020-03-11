// import Lock from '../../../src/helpers/Lock.js'

describe('测试', () => {
    it('注释', () => {
        //不支持es6class语法
    })
})

// describe('锁测试', () => {
//     let lock = null;
//     beforeEach(() => {
//         lock = new Lock();
//     })

//     it('设置锁后(setLock)，未解锁时对象isLock属性为false', () => {
//         lock.setLock(0);
//         expect(lock.isLock).toBeFalsy();
//     })

//     it('取消锁后(cancelLock)，锁对象isLock属性为true', () => {
//         lock.setLock(0);
//         lock.cancelLock();
//         expect(lock.isLock).toBeTruly();
//     })
// })