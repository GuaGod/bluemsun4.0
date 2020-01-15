class ErrorModel {
    constructor(error = null, msg = '', errorNo = -1) {
        this.error = error;
        this.msg = msg;
        this.errorNo = errorNo;
    }
}

module.exports = ErrorModel;