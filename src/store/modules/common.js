/**
 * 保存着公用的状态，包括用户登录信息等
 */
const common = {
    namespaced: true,
    state: {
        stateCode: 0,
        username: '',
        userId: 0,
        headUrl: '',
    },
    
    mutations: {
        'SET_USERID': (state, userId) => {
            state.userId = userId;
        },
        'SET_STATECODE': (state, stateCode) => {
            state.stateCode = stateCode;
        },
        'SET_USERNAME': (state, username) => {
            state.username = username;
        },
        'SET_HEADURL': (state, avatorUrl) => {
            state.avatorUrl = avatorUrl;
        }
    },

    actions: {
        setUserId: ({ commit }, userId) => {
            return commit('SET_USERID', userId);
        },
        setStateCode: ({ commit }, stateCode) => {
            return commit('SET_STATECODE', stateCode);
        },
        setUsername: ({ commit }, username) => {
            return commit('SET_USERNAME', username);
        },
        setHeadUrl: ({ commit }, headUrl) => {
            return commit('SET_HEADURL', headUrl);
        },
    }
}

export default common