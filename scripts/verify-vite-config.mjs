import { readFileSync } from 'fs'

const config = readFileSync('./vite.config.ts', 'utf-8')
let failed = false

function assert(condition, msg) {
  if (!condition) {
    console.error(`  FAIL: ${msg}`)
    failed = true
  } else {
    console.log(`  PASS: ${msg}`)
  }
}

// Check what mode we're in based on CLI arg
const mode = process.argv[2] || 'pre-install'

if (mode === 'pre-install') {
  console.log('[2.1.1] Verifying AutoImport/Components are NOT yet configured...')
  assert(!config.includes('AutoImport'), 'AutoImport should NOT be configured yet')
  assert(!config.includes('Components('), 'Components should NOT be configured yet')
  assert(!config.includes('ElementPlusResolver'), 'ElementPlusResolver should NOT be configured yet')

  if (failed) {
    console.error('\n❌ Test FAILED - plugins already configured!')
    process.exit(1)
  } else {
    console.log('\n✅ Test PASSED - plugins not yet configured (expected failure state confirmed)')
  }
} else if (mode === 'post-install') {
  console.log('[2.1.4] Verifying AutoImport/Components ARE configured...')
  assert(config.includes('AutoImport'), 'AutoImport must be imported')
  assert(config.includes("from 'unplugin-auto-import/vite'"), 'AutoImport must be from unplugin-auto-import/vite')
  assert(config.includes('Components('), 'Components must be configured')
  assert(config.includes("from 'unplugin-vue-components/vite'"), 'Components must be from unplugin-vue-components/vite')
  assert(config.includes('ElementPlusResolver'), 'ElementPlusResolver must be used')
  assert(config.includes("from 'unplugin-vue-components/resolvers'"), 'ElementPlusResolver must be from resolvers')
  assert(config.includes('auto-imports.d.ts'), 'auto-imports.d.ts path must be set')
  assert(config.includes('components.d.ts'), 'components.d.ts path must be set')

  if (failed) {
    console.error('\n❌ Verification FAILED - some plugin config is missing!')
    process.exit(1)
  } else {
    console.log('\n✅ All plugin configurations verified!')
  }
}
