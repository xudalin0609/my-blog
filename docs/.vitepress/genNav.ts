import * as fs from 'fs'
import * as path from 'path'

interface NavItem {
  text: string
  link: string
  items?: NavItem[]
}

function generateNav(dir: string, baseDir: string = dir): any[] {
  const items: NavItem[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const relativePath = path.relative(baseDir, fullPath)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      if (file.startsWith('.')) continue
      
      const children = generateNav(fullPath, baseDir)
      if (children.length > 0) {
        items.push({
          text: file,
          items: children,
          link: children[0].link
        })
      }
    } else if (file.endsWith('.md')) {
      if (file === 'index.md' || file.startsWith('.')) continue
      
      items.push({
        text: path.basename(file, '.md'),
        link: '/' + relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
      })
    }
  }

  return items
}

export function getNavigation() {
  const docsDir = path.resolve(__dirname, '../vitepress')
  const nav = generateNav(docsDir, __dirname)
  return nav
} 