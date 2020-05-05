class SuccessModel {
    constructor(data = null, msg = '') {
        this.data = data;
        this.msg = msg;
        this.errorNo = 0;
    }
}

module.exports = SuccessModel;