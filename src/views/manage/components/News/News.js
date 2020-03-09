import columns from './columns.js'
import API from '@/api/index.js'

let manageAPI = new API('manage');
export default {
    data() {
        return {
            columns,
            applicationArray: []
        }
    },

    created() {
        manageAPI.getRegisterList({
            pageNum: 1
        })
    }
}