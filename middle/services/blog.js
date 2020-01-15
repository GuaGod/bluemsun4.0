const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');

let api = new API('blog');
function getList(data) {
    return api.findPageBlogByHit(data).then(({ data }) => {
        let list = data.list;
        let newList = [];
        for(let i = 0, length = list.length; i < length; i++) {
            let {articleGist, articleId, blogClass, date, img, readNum, title, userId, username} = list[i];
            let desc = articleGist;
            let blogId = articleId;
            let headUrl = img;
            let newItem = {desc, blogId, blogClass, date, headUrl, readNum, title, userId, username};
            newList.push(newItem);
        }
        
        data.list = newList;
        return Promise.resolve(new SuccessModel(data));
    }, (error) => {
        return Promise.resolve(new ErrorModel(error, '后端返回出错'));
    }).catch((error) => {
        return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
    })
}

function getListTitle(data) {
    return api.findPageBlogByHit(data)
           .then(({data}) => {
               let list = data.list;
               let newList = [];
               for(let i = 0, length = list.length; i < length; i++) {
                   let { title, articleId } = list[i];
                   let blogId = articleId;
                   let newItem = { title, blogId };
                   newList.push(newItem);
               }

               data.list = newList;
               return Promise.resolve(new SuccessModel(data));
           }, (error) => {
               return Promise.resolve(new ErrorModel(error, '后端返回出错'));
           }).catch((error) => {
            return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
           })
}

module.exports = {
    getList,
    getListTitle,
}
