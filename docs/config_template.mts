import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大林的博客",
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
    nav: ['nav'],
    sidebar: ['sidebar'],
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
