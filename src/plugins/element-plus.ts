import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function setupElementPlus(app: App<Element>): void {
  // Register all Element Plus icons globally
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
