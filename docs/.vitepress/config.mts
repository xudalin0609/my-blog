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
    nav: [{"text":"技术文档","items":[{"text":"第一个文档","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0"}]}],
    sidebar: [{"text":"技术文档","items":[{"text":"第一个文档","link":"/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0"}]}],
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
