const path = require("path");
const wrap = require("./wrap");
const isProd = process.env.NODE_ENV === "production";

const config = {
  theme: "default",
  dev: {
    port: 3000,
    outputPath: path.join(process.cwd(), "./"),
    publicPath: "/"
  },
  website: {
    pageName(page){
      return page.replace('.html', '')
    },
    seo: {
      title: "老赵茶馆",
      keywords: "老赵, 茶馆, 前端, 代码, 扯淡, 音乐, 电影, 分享",
      description: "Hi, 老赵其实不老, 是一枚前端攻城狮, 就这样...<br/>QQ群：320881312",
      copyright: '© 2018 All Rights Reserved. 粤ICP备15035931号-1. 阿里云 提供 CDN 服务. 托管于 <a href="https://github.com/zhw2590582/zhw2590582.github.io">GitHub</a>.'
    },
    post: {
      excerpt: 120,
      pageSize: 5
    },
    github: {
      clientID: "7eade918eada70a8fe24",
      clientSecret: "9c322cdfe9ad8cc18768090c5e26f139f868a50b",
      repo: "blog-issue",
      owner: "fydy",
      admin: ["fydy"]
    },
    plugins: {
      loading: "#000",
      baidutongji: "6878b56ee36c990a8330d8bc412ede91"
    },
    menus: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "关于",
        link: "/about.html"
      },
      {
        name: "归档",
        link: "/archive.html"
      },
      {
        name: "留言",
        link: "/message.html"
      },
      {
        name: "友链",
        link: "/friends.html"
      },
      {
        name: "编辑",
        link: "/editor.html"
      }
    ]
  }
};

module.exports = wrap(config);