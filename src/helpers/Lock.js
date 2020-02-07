/**
 * @property { boolean } isLock 当前锁的状态是开启还是封闭状态
 * @property { timeout } timer 保存锁延迟开启timeout的指针
 */
export default class Lock {
    constructor() {
        this.isLock = false;
        this.timer = null;
    }
    /**
     * 将状态调整成锁状态
     * @param { number } timeout 锁状态持续时间 默认值为0
     */
    setLock(timeout = 0) {
        this.isLock = true;
        if(timeout === 0) {
            return ;
        }
        this.timer = setTimeout(() => {
            this.isLock = false;
        }, timeout); 
    }
    /**
     * 取消锁状态
     */
    cancelLock() {
        this.isLock = false;
        clearTimeout(this.timer);
        this.timer = null;
    }
}
