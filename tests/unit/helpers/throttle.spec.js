import throttle from '../../../src/helpers/throttle'


describe('节流函数测试', () => {
    let mockCallback = null;

    beforeEach(() => {
        mockCallback = jest.fn();
    })
    it('规定时间内，连续调用函数将只触发一次，再次调用不重置时间', () => {
        let throttleFn = throttle(mockCallback, 0);
        throttleFn();
        throttleFn();
        setTimeout(() => {
            expect(mockCallback.mock.calls.length).toBe(1);
        }, 0);
    })

    it('超过规定时间后，再次调用函数，将多次触发', () => {
        let throttleFn = throttle(mockCallback, 0);
        throttleFn();
        setTimeout(() => {
            throttleFn();
        }, 1);

        setTimeout(() => {
            expect(m.mock.calls.length).toBe(2);
        }, 2)
    })
})