export default class Lock {
    constructor() {
        this.isLock = false;
        this.timer = null;
    }

    setLock(timeout) {
        this.isLock = true;
        if(timeout === undefined) {
            return ;
        }
        this.timer = setTimeout(() => {
            this.isLock = false;
        }, timeout); 
    }

    cancelLock() {
        this.isLock = false;
        clearTimeout(this.timer);
        this.timer = null;
    }
}
