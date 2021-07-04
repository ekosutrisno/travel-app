import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({

  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "TravelApp",
        short_name: "TravelApp",
        theme_color: "#0F172A",
        background_color: "#131C21",
        icons: [
          {
            "src": "pwa/maskable_icon.png",
            "sizes": "731x731",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "pwa/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "pwa/android-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "pwa/apple-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "pwa/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "pwa/favicon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "pwa/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    })
  ],
  resolve:{
    alias: {
      '/@/': join(__dirname, 'src'),
    }
  }
})
