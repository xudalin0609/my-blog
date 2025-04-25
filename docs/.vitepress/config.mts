import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "温知文档",
  description: "温知文档,温知笔记,欢迎使用温知系列产品！",
  markdown: {
    config: (md) => {
      md.use(taskLists)
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
    nav: [{"text":"技术文档","items":[{"text":"云南&新疆","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b9607c30-2194-11f0-adbe-67b93461d40c"},{"text":"哈尔滨","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b961dbc0-2194-11f0-adbe-67b93461d40c"},{"text":"上海","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b9631440-2194-11f0-adbe-67b93461d40c"}]},{"text":"日记","link":""}],
    sidebar: [{"text":"技术文档","items":[{"text":"云南&新疆","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b9607c30-2194-11f0-adbe-67b93461d40c"},{"text":"哈尔滨","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b961dbc0-2194-11f0-adbe-67b93461d40c"},{"text":"上海","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/b9631440-2194-11f0-adbe-67b93461d40c"}]},{"text":"日记","link":""}],
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
