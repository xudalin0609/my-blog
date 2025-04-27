import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
import container from 'markdown-it-container'
import { getNavigation } from './genNav'

const nav = getNavigation()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大林的博客",
  markdown: {
    config: (md) => {
      md.use(taskLists)
      md.use(container, 'image-row', {
        validate: function (params) {
          return params.trim().match(/^image-row\s*(.*)$/);
        },
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '<div class="image-row">\n';
          } else {
            return '</div>\n';
          }
        }
      });
    },
    image: {
      lazyLoading: true
    }
  },
  head: [
    [
      'meta',
      {
        'name': 'meta-name',
        'conent': 'meta-content'
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    // nav: [{ "text": "技术文档", "items": [{ "text": "第一个文档", "link": "/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0" }, { "text": "第一个文档", "link": "/vitepress/8c2fe830-c5bf-11ef-8ecd-bb885d28bca0/902eb420-c5bf-11ef-8ecd-bb885d28bca0" }] }],
    sidebar: nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xudalin0609' }
    ],
    //页脚
    footer: {
      message: '',
      copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">xxxx</a>',
    },
  }
})
