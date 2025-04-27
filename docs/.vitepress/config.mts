import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大林的博客",
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
    image: {
      lazyLoading: true
    }
  },
  head:[
    [
      'meta',
      {
        'name':'meta-name',
        'conent':'meta-content'
      }
    ], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{"text":"日记","items":[{"text":"2025-04-25","link":"/vitepress/7744a460-21e5-11f0-adbe-67b93461d40c/5dcb3030-21e5-11f0-adbe-67b93461d40c"}]},{"text":"3-stories","items":[{"text":"上海","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b9631440-2194-11f0-adbe-67b93461d40c"},{"text":"哈尔滨","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b961dbc0-2194-11f0-adbe-67b93461d40c"},{"text":"云南&新疆","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b9607c30-2194-11f0-adbe-67b93461d40c"}]}],
    sidebar: [{"text":"日记","items":[{"text":"2025-04-25","link":"/vitepress/7744a460-21e5-11f0-adbe-67b93461d40c/5dcb3030-21e5-11f0-adbe-67b93461d40c"}]},{"text":"3-stories","items":[{"text":"上海","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b9631440-2194-11f0-adbe-67b93461d40c"},{"text":"哈尔滨","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b961dbc0-2194-11f0-adbe-67b93461d40c"},{"text":"云南&新疆","link":"/vitepress/89b4f2d0-21e5-11f0-adbe-67b93461d40c/b9607c30-2194-11f0-adbe-67b93461d40c"}]}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyming99/wenzdoc_web' }
    ],
    //页脚
    footer: {
      message: '',
      copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">xxxx</a>',  
    },
  }
})
