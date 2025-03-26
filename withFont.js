const path = require('node:path')

// eslint-disable-next-line import/order
const { withDangerousMod } = require('@expo/config-plugins')
const fs = require('fs-extra')

const fonts = [
  {
    id: 'inter',
    name: 'InterRegular',
  },
]

const withCopyFonts = (config) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const { projectRoot } = config.modRequest
      const sourceFontDir = path.join(projectRoot, 'assets', 'fonts', 'android-fonts')

      const destFontDir = path.join(
        config.modRequest.platformProjectRoot,
        'app',
        'src',
        'main',
        'res',
        'font'
      )

      // Ensure the destination directory exists
      await fs.ensureDir(destFontDir)

      // Read all font files from the source directory
      const fontFiles = await fs.readdir(sourceFontDir)

      // Copy each font file to the destination directory
      for (const fontFile of fontFiles) {
        const sourcePath = path.join(sourceFontDir, fontFile)
        const destPath = path.join(destFontDir, fontFile)
        await fs.copy(sourcePath, destPath)
      }

      const mainApplicationPath = path.join(
        config.modRequest.platformProjectRoot,
        'app',
        'src',
        'main',
        'java',
        ...config.android.package.split('.'),
        'MainApplication.kt'
      )

      let mainApplication = fs.readFileSync(mainApplicationPath, 'utf8')

      // Add import statement if it doesn't exist
      if (
        !mainApplication.includes('import com.facebook.react.views.text.ReactFontManager')
      ) {
        const importStatement = 'import com.facebook.react.views.text.ReactFontManager'
        mainApplication = mainApplication.replace(
          /(import.*\n)/,
          `$1${importStatement}\n`
        )
      }

      const fontManagerCode = fonts
        .map(
          (font) =>
            `        ReactFontManager.getInstance().addCustomFont(this, "${font.name}", R.font.${font.id})`
        )
        .join('\n')

      // Check if font loading code already exists
      if (!mainApplication.includes('// Custom font loading')) {
        // Add font loading code to onCreate method
        const updatedMainApplication = mainApplication.replace(
          /(override\s+fun\s+onCreate\(\)\s*\{[\s\S]*?)(ApplicationLifecycleDispatcher\.onApplicationCreate\(this\)\s*\})/m,
          (match, p1, p2) => `${p1}
        // Custom font loading
${fontManagerCode}

        ${p2}`
        )

        fs.writeFileSync(mainApplicationPath, updatedMainApplication)
      }

      // Xóa thư mục fonts của Expo
      const expoFontDir = path.join(
        config.modRequest.platformProjectRoot,
        'app',
        'src',
        'main',
        'assets',
        'fonts'
      )

      if (fs.pathExists(expoFontDir)) {
        fs.remove(expoFontDir)
      }

      return config
    },
  ])
}

module.exports = withCopyFonts
