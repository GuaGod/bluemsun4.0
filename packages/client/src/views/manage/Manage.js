export default {
    methods: {
        onSelectMenu(name) {
            this.$router.push('/manage/' + name);
        }
    }
}