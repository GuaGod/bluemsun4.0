const userInfo = require('./userInfo');

module.exports = {
    state: {
        //超级管理员
        ...userInfo['superManager1'],
        // ...userInfo['manager1'],
        // ...userInfo['user1'],
    }
}