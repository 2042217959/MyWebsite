import myWebsitePicture from '../assets/mywebsitepicture.png'
import myWebsitePicture2 from '../assets/mywebsitepicture2.png'
import myWebsitePicture3 from '../assets/mywebsitepicture3.png'
import myWebsitePicture4 from '../assets/mywebsitepicture4.png'
import wyymusic from '../assets/wyymusic.png'
import wyymusic2 from '../assets/wyymusic2.png'

export const projects = [
  {
    id: 1,
    title: "个人博客网站",
    description: "一个用来记录前端学习的个人博客网站，持续更新中...",
    images: [
      {
        url: myWebsitePicture,
        title: "首页展示"
      },
      {
        url: myWebsitePicture2,
        title: "项目展示"
      },
      {
        url: myWebsitePicture3,
        title: "关于我"
      },
      {
        url: myWebsitePicture4,
        title: "我的项目"
      }
    ],
    tags: ["React", "framer motion","github pages","git"],
    features: [
      "响应式设计，适配多端显示",
      "深色/浅色主题切换",
      "平滑的页面过渡动画",
      "Markdown 文章支持"
    ],
    challenges: [
      "如何实现主题切换功能",
      "如何优化页面加载性能",
      "如何实现平滑的动画效果"
    ],
    solutions: [
      "使用 Context API 管理主题状态",
      "实现组件懒加载和图片优化",
      "使用 Framer Motion 实现动画"
    ],
    github: "https://github.com/2042217959/MyWebsite",
    demo: "https://2042217959.github.io/MyWebsite/",
    isDeployed: true,
    techStack: [
      "React ",
      "Framer Motion",
      "github pages",
      "git"
    ]
  },
  {
    id: 2,
    title: "在线音乐播放器",
    description: "一个在线音乐播放器，样式参考的是网易云",
    images: [
      {
        url: wyymusic,
        title: "登录页面"
      },
      {
        url: wyymusic2,
        title: "首页"
      }
    ],
    tags: ["React", "Redux", "Web Audio API","Ant Design"],
    features: [
      "音乐播放控制",
      "用户系统",
      "七天免登录功能",
      "实现Ant Design组件库"
    ],
    challenges: [
      "如何处理音频流",
      "多组件间的状态共享和同步",
      "组件重复渲染问题"
    ],
    solutions: [
      "使用 Web Audio API 处理音频",
      "使用 Redux 管理状态",
      "使用React.memo进行组件缓存"
    ],
    github: "https://gitee.com/lyhm130/wymusic",
    isDeployed: false,
    techStack: [
      "React",
      "Redux",
      "Web Audio API",
      "Ant Design"
    ]
  }
  // 可以继续添加更多项目...
] 