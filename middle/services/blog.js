const API = require('../backend/index');
const SuccessModel = require('../instance/SuccessModel');
const ErrorModel = require('../instance/ErrorModel');
const config = require('../config/remote.js')
const { mapProperty } = require('../helpers/mapProperty');

let api = new API('blog');
function getList(data = {
    method: '',          // hit / class /keyword
    pageNum: 1,
    value: ''
}) {
    let returnPromise = null;

    let method = data.method;
    delete data.method;

    switch (method) {
        case 'hit': {
            data.blogClass = data.value;
            delete data.value;
            returnPromise = api.findPageBlogByHit(data);
            break;
        }
        case 'class': {
            data.blogClass = data.value;
            delete data.value;
            returnPromise = api.findPageBlogByBlogClass(data);
            break;
        }
        case 'keyword': {
            data.keyWord = data.value;
            delete data.value;
            returnPromise = api.findBlogByKeyWord(data);
            break;
        }
    }

    if (returnPromise === null) {
        return Promise.resolve(new ErrorModel(error, 'method值为hit/class/keyword'));
    }

    return returnPromise.then(({ data }) => {
        let list = data.list;
        let newList = [];
        for (let i = 0, length = list.length; i < length; i++) {
            let { articleGist, articleId, blogClass, date, img, readNum, title, userId, username } = list[i];
            let desc = articleGist;
            let blogId = articleId;
            let headUrl =  config.imgRemoteBase + img;
            let newItem = { desc, blogId, blogClass, date, headUrl, readNum, title, userId, username };
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
        .then(({ data }) => {
            let list = data.list;
            let newList = [];
            for (let i = 0, length = list.length; i < length; i++) {
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

/**
 * 
 * @param {Number} num 前几位的热门博客
 */
function getTopHotList({ num }) {
    let searchData = {
        blogClass: 'hit',
        pageNum: 1
    }

    return api.findPageBlogByHit(searchData)
        .then(({ data }) => {
            let list = data.list;
            let newList = [];

            for (let i = 0, length = Math.min(num, list.length); i < length; i++) {
                let { articleGist, articleId, blogClass, date, img, readNum, title, userId, username } = list[i];
                let desc = articleGist;
                let blogId = articleId;
                let headUrl = config.imgRemoteBase + img;
                let newItem = { desc, blogId, blogClass, date, headUrl, readNum, title, userId, username };
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

function getBlog(searchData) {
    return api.getBlog(searchData)
        .then(({ data }) => {
            let responseData = mapProperty(data, {
                title: 'title',
                content: 'content',
                author: 'username',
                blogClass: 'blogClass',
                date: 'date'
            }, false)

            return Promise.resolve(new SuccessModel(responseData));
        }, (error) => {
            return Promise.resolve(new ErrorModel(error, '后端返回出错'));
        }).catch((error) => {
            return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
        })
}

/**
 * 获取第一页评论及每一条评论自带的子评论（子评论只获取第一页）
 * @param {}} data 
 */
async function getBlogComment(data) {
    let comment = await api.getComment(data)
        .then(({ data }) => {
            let responseData = mapProperty(data, {
                total: 'total',
                list: 'list',
            }, false)

            responseData.list.forEach(item => {
                item.img = `${config.imgRemoteBase}/${item.img}`
            })

            return Promise.resolve(responseData);
        });

    let commentList = comment.list;
    /**
     * 
     * @param {Object: {commentId: number}} data 
     */
    function getCommentChildren(data) {
        data.pageNum = 1;
        return api.getCommentChildren(data)
            .then(({ data }) => {
                data.list.shift();
                data.total--;

                let responseData = mapProperty(data, {
                    total: 'total',
                    list: 'list'
                }, false);

                return Promise.resolve(responseData);
            })
    }

    let commentChildrenPromise = [];
    commentList.forEach((item) => {
        let promise = getCommentChildren({
            commentId: item.commentId
        });

        commentChildrenPromise.push(promise);
    })

    let commentChildren = await Promise.all(commentChildrenPromise)
        .then((data) => {
            return Promise.resolve(data);
        })

    for (let i = 0, length = commentChildren.length; i < length; i++) {
        commentList[i].children = commentChildren[i];
    }

    return Promise.resolve(new SuccessModel(comment));
}

function getCommentChildren(data) {
    return api.getCommentChildren(data)
        .then(({ data }) => {
            if (data.pageNum === 1) {
                data.list.shift();
            }

            data.total--;

            let responseData = mapProperty(data, {
                total: 'total',
                list: 'list'
            }, false);

            return Promise.resolve(responseData);
        }, (error) => {
            return Promise.resolve(new ErrorModel(error, '后端返回出错'));
        }).catch((error) => {
            return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
        })
}

function replyBlog(data) {
    return api.addComment(data)
        .then(({ data }) => {

            return Promise.resolve(data);
        }, (error) => {
            return Promise.resolve(new ErrorModel(error, '后端返回出错'));
        }).catch((error) => {
            return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
        })
}

function replyComment(data, cookie) {
    return api.replyComment(data, cookie)
        .then(({ data }) => {

            return Promise.resolve(data);
        }, (error) => {
            return Promise.resolve(new ErrorModel(error, '后端返回出错'));
        }).catch((error) => {
            return Promise.resolve(new ErrorModel(error, '中间层处理数据中出错'));
        })
}

function writeBlog() {

}

function updateBlog() {

}

function deleteBlog() {

}

module.exports = {
    getList,
    getListTitle,
    getTopHotList,
    getBlog,
    getBlogComment,
    replyBlog,
    replyComment,
    writeBlog,
    updateBlog,
    deleteBlog,
    getCommentChildren,
}
