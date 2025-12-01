import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
import container from 'markdown-it-container'
import { getNavigation } from './genNav'

// const nav = getNavigation()

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
    nav: [
      { text: '日记', link: '/diary/2025-04-25' },
      { text: '很久之前的东西', link: '/long-time-ago/long-time-ago' },
      { text: '杂七杂八', link: '/miscellaneous-writings/AI-coder-unemployment' },

    ],
    sidebar: {
      "/miscellaneous-writings/":
        [
          {
            text: '杂七杂八', items: [
              { text: 'AI、程序员和失业', link: '/miscellaneous-writings/AI-coder-unemployment' },
              { text: '我比AI强在哪?', link: '/miscellaneous-writings/when-use-ai' },
              {text: '在小厂写代码', link: '/miscellaneous-writings/code-in-small-tech-companies'},
            ]
          }
        ],
      "/diary/":
        [
          {
            text: '日记', items: [
              { text: '2025-04-25', link: '/diary/2025-04-25' },
              { text: '2025-05-01', link: '/diary/2025-05-01' },
              { text: '2025-07-03', link: '/diary/2025-07-03' },
              { text: '2025-07-21', link: '/diary/2025-07-21' },
              { text: '包子和饺子', link: '/diary/steam-bun-jiaozi' },
              { text: '写于三十岁的生日', link: '/diary/writed-when-thirty' },
            ]
          }
        ],
        "/long-time-ago/":
          [
            {
              text: '很久之前的东西', items: [
                { text: '很久之前的东西', link: '/long-time-ago/long-time-ago' },
                { text: '啤酒笔记', link: '/long-time-ago/beers' },
              ]
            }
          ]
    },

    //页脚
    footer: {
      message: 'Copyright © 2024-2025 <a href="https://github.com/xudalin0609/my-blog" target="_blank">大林的个人站</a>',
      copyright: 'ICP备案 <a href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2025038845号-1</a> | 黑公网安备 <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">23010902010372号</a>',
    },
  }
})
