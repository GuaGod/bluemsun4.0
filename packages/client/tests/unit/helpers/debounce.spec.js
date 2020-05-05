import debounce from '../../../src/helpers/debounce.js';

describe('防抖函数测试', () => {
    let mockCallback = null
    beforeEach(() => {
        mockCallback = jest.fn();
    })
    it('规定时间内，连续调用函数将只触发一次，再次调用将重置时间', () => {
        let debounceFn = debounce(mockCallback, 0);
        debounceFn();
        debounceFn();
        setTimeout(() => {
            expect(mockCallback.mock.calls.length).toBe(1);
        }, 0);
    })
})