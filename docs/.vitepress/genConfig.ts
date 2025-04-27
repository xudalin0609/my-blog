import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import type { DefaultTheme } from 'vitepress'

function getFirstH1(filePath: string): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { content: markdownContent } = matter(content)
    const h1Match = markdownContent.match(/^#\s+(.+)$/m)
    return h1Match ? h1Match[1] : path.basename(filePath, '.md')
  } catch (error) {
    return path.basename(filePath, '.md')
  }
}

function generateNav(dir: string, baseDir: string = dir): DefaultTheme.NavItem[] {
  const items: DefaultTheme.NavItem[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const relativePath = path.relative(baseDir, fullPath)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 忽略以点开头的目录
      if (file.startsWith('.')) continue
      
      const children = generateNav(fullPath, baseDir)
      if (children.length > 0) {
        const dirItem: DefaultTheme.NavItem = {
          text: file,
          items: children,
          link: children[0].link // 使用第一个子项的链接作为目录的链接
        }
        items.push(dirItem)
      }
    } else if (file.endsWith('.md')) {
      // 忽略 index.md 和以点开头的文件
      if (file === 'index.md' || file.startsWith('.')) continue
      
      const title = getFirstH1(fullPath)
      const item: DefaultTheme.NavItem = {
        text: title,
        link: '/' + relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
      }
      items.push(item)
    }
  }

  return items
}

export function generateConfig() {
  const docsDir = path.resolve(__dirname, '..')
  const nav = generateNav(docsDir)
  
  return {
    nav,
    sidebar: nav
  }
} 