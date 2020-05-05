import API from '@/api/index.js'
import InvitationItem from '@/components/common/InvitationItem/InvitationItem.vue'

let blogAPI = new API('blog')
export default {
    components: {
        InvitationItem
    },
    data() {
        return {
            invitationArray: []
        }
    },
    created() {
        blogAPI.getTopHotList({
            num: 4
        })
               .then(({ data }) => {
                   this.invitationArray = data.data.list;
               })
    }
}