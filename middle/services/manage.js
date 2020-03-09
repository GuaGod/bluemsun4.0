const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');
const config = require('../config/remote.js')
const { mapProperty } = require('../helpers/mapProperty');

let manageAPI = new API('manage');

function getRegisterList(data) {
    return manageAPI.findPageRegister(data)
                    .then(({ data }) => {
                        let responseData = mapProperty(data, {
                            total: 'total',
                            list: 'list'
                        }, false);

                        let list = responseData.list;
                        for(let i = 0, length = list.length; i < length; i++) {
                            list[i] = mapProperty(list[i], {
                                userId: 'userId',
                                username: 'username',
                                name: 'name',
                                grade: 'grade',
                                phone: 'phone',
                                position: 'position',
                                stuId: 'stuId'
                            }, false)
                        }

                        return Promise.resolve(new SuccessModel(responseData));
                    }, (error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })
}

function getRegisterDetail(data) {
    return manageAPI.getRegisterDetail(data)
                    .then(({ data }) => {
                        delete data.password;
                        data.img = config.imgRemoteBase + data.img;
                        return Promise.resolve(new SuccessModel(data));
                    }, (error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })
}   

function passRegister(data) {
    return manageAPI.examineRegister(data)
                    .then(({ data }) => {
                        return Promise.resolve(new SuccessModel(data));
                    }, (error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })
}           

function rejectRegister(data) {
    return manageAPI.examineRegister(data)
                    .then(({ data }) => {
                        return Promise.resolve(new SuccessModel(data)); 
                    }, (error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        console.log(error);
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })
}

function getProductionList(data) {
    return manageAPI.findPageGoodWorks(data)
                    .then(({ data }) => {
                        let responseData = mapProperty(data, {
                            total: 'total',
                            list: 'list'
                        }, false);

                        let list = responseData.list;
                        for(let i = 0, length = list.length; i < length; i++) {
                            list[i] = mapProperty(list[i], {
                                title: 'title',
                                author: 'author',
                                date: 'date'
                            }, false)
                        }

                        return Promise.resolve(new SuccessModel(responseData));
                    }, (error) => {
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })
}

function getApplicationList(data) {
    return manageAPI.findPageSignUp(data)
                    .then(({ data }) => {
                        let responseData = mapProperty(data, {
                            total: 'total',
                            list: 'list'
                        }, false);

                        let list = responseData.list;
                        for(let i = 0, length = list.length; i < length; i++) {
                            list[i] = mapProperty(list[i], {
                                name: 'name',
                                major: 'major',
                                position: 'jobInterview',
                                stuId: 'stuId',
                                phone: 'phone',
                                id: 'id'
                            }, false)
                        }

                        return Promise.resolve(new SuccessModel(responseData));
                    }, (error) => {
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })    
}

function getNewsList(data) {
    return manageAPI.findPageSignUp(data)
                    .then(({ data }) => {
                        let responseData = mapProperty(data, {
                            total: 'total',
                            list: 'list'
                        }, false);

                        let list = responseData.list;
                        for(let i = 0, length = list.length; i < length; i++) {
                            list[i] = mapProperty(list[i], {
                                title: 'title',
                                date: 'date',
                                id: 'id'
                            }, false)
                        }

                        return Promise.resolve(new SuccessModel(responseData));
                    }, (error) => {
                        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
                    }).catch((error) => {
                        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
                    })       
}

module.exports = {
    getRegisterList,
    passRegister,
    rejectRegister,
    getRegisterDetail,
    getProductionList,
    getApplicationList,
    getNewsList
}