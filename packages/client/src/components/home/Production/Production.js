export default {
    data() {
      return {
        title: "Product / 作品",
        subTitle: "新奇好玩的作品，让你欲罢不能",
        more: "/productions",
        productions: [
                  {
                      imgUrl: '/home/p1.jpg',
                      title: 'Answer Question',
                      subTitle: '作业系统',
                      id: 1,
                  },
                  {
                      imgUrl: '/home/p2.jpg',
                      title: 'Fantastic ball',
                      subTitle: 'canvas实例',
                      id: 2,
                  },
                  {
                      imgUrl: '/home/p3.jpg',
                      title: 'Tetris Online',
                      subTitle: '基于websocket的俄罗斯方块游戏',
                      id: 3,
                  },
                  {
                      imgUrl: '/home/p4.jpg',
                      title: '打印机系统',
                      subTitle: '线上控制Bluem打印机',
                      id: 4,
                  },
              ],
      }
    },
    methods: {
      getImgUrl(icon) {
        return import(`../../../assets/images${icon}`)
               .then((res) => {
                return res.default;
               })
      }
    },
    mounted() {
      for(let i = 0, length = this.productions.length; i < length; i++) {
        this.getImgUrl(this.productions[i].imgUrl)
            .then((imgUrl) => {
              this.productions[i].imgUrl = imgUrl;
            })
      }
    }
  };