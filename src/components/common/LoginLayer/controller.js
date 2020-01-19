import API from '@/api/index.js'

let loginAPI = new API('user');
class Controller {
    constructor() {

    }

    login(data) {
        return loginAPI.login(data)
                .then(({ data }) => {
                    console.log(123)
                    console.log(data)
                    data = data.data;
                     
                    if(data.stateCode === 0) {
                        return Promise.resolve({
                            success: false,
                            message: data.message,
                        });
                    }

                    return Promise.resolve({
                        success: true,
                        message: data.message,
                        data: data
                    });
                }, (error) => {
                    console.log(error)
                    return Promise.resolve({
                        success: false,
                        message: '服务器出错，请稍后重新尝试！',
                    })
                }).catch((error) => {
                    return Promise.resolve({
                        success: false,
                        message: '系统出错！'
                    })
                })
    }
}

let controller = new Controller();

export default controller;