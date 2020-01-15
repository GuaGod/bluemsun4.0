import API from '@/api/index'
let blogAPI = new API('blog');
export default {
  data() {
    return {
      title: "Blog / 博客",
      subTitle: "最新技术发展,业界前沿博客",
      classify: [
        {
          title: "Javascript",
          desc: "没看过这些，怎么敢说懂js",
          id: 153,
          imgUrl: "/home/js.png"
        },
        {
          title: "CSS",
          desc: "神奇的CSS在哪里",
          id: 157,
          imgUrl: "/home/css.png"
        },
        {
          title: "Node.js",
          desc: "亿万级数据服务的秘密",
          id: 156,
          imgUrl: "/home/node.png"
        },
        {
          title: "移动Web开发",
          desc: "PC转向移动，这是个问题",
          id: 159,
          imgUrl: "/home/mobile.png"
        },
        {
          title: "用户体验设计",
          desc: "震惊！原来应用还可以这样...",
          id: 161,
          imgUrl: "/home/userFeel.png"
        },
        {
          title: "Web性能优化",
          desc: "如丝般柔顺体验的背后",
          id: 160,
          imgUrl: "/home/webBetter.png"
        }
      ],
      blogList: [],
    };
  },

  methods: {
    getNewBlog() {

    },
    getImgUrl(icon) {
      return import(`@/assets/images${icon}`).then(res => {
        return res.default;
      });
    }
  },

  mounted() {
    for (let i = 0, length = this.classify.length; i < length; i++) {
      this.getImgUrl(this.classify[i].imgUrl).then(imgUrl => {
        this.classify[i].imgUrl = imgUrl;
      });
    }

    blogAPI.getListTitle({pageNum: 1, blogClass: 'hit'})
           .then(({data}) => {
              data = data.data;
              let { list } = data;
              this.blogList = list;
           })
  }
};