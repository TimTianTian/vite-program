import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))
let failed = false

function assert(condition, msg) {
  if (!condition) {
    console.error(`  FAIL: ${msg}`)
    failed = true
  } else {
    console.log(`  PASS: ${msg}`)
  }
}

console.log('[1.1.1] Verifying element-plus + unplugin toolchain are installed...')

assert(pkg.dependencies && pkg.dependencies['element-plus'], 'element-plus must be in dependencies')
assert(pkg.dependencies && pkg.dependencies['@element-plus/icons-vue'], '@element-plus/icons-vue must be in dependencies')
assert(pkg.devDependencies && pkg.devDependencies['unplugin-vue-components'], 'unplugin-vue-components must be in devDependencies')
assert(pkg.devDependencies && pkg.devDependencies['unplugin-auto-import'], 'unplugin-auto-import must be in devDependencies')

if (failed) {
  console.error('\n❌ Verification FAILED - some packages are missing!')
  process.exit(1)
} else {
  console.log('\n✅ All 4 packages are installed correctly!')
}
