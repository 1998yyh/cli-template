import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import postcssPxtorem from 'postcss-pxtorem'
import svgr from 'vite-svg-loader'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
// 自动引入
import DefineOptions from 'unplugin-vue-define-options/vite'
import cssnano from 'cssnano'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

const _viteStylelint = (viteStylelint as Record<string, any>).default

const isProduction = process.env.NODE_ENV === 'production'
// 填入项目的 CDN 域名地址
const CDN_URL = 'xxxxxx'

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'))

export default defineConfig({
    base: isProduction ? CDN_URL : '/',
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-import.d.ts'
        }),
        DefineOptions(),
        svgr()
    ],
    server: {
        // host: true,
        // port: 5174,
        // proxy: {
        //   '^/h5': {
        //     target: 'http://10.80.77.20:7300',
        //     changeOrigin: true,
        //     // rewrite: (path) => path.replace(/^\/mock/, '/mock/6279e697bdf96e667e125213/h5_copy')
        //     rewrite: (path) => path.replace(/^\/h5/, '/mock/60acc5bede58b20c48f663bc')
        //   }
        // },
        // fs: {
        //   // Allow serving files from one level up to the project root
        //   strict: false
        // }
    },
    define: {

    },
    resolve: {
        alias: {
            '@assets': path.join(__dirname, 'src/assets'),
            '@': path.join(__dirname, 'src/')
        }
    },
    // 处理JSON解析
    json: {
        stringify: true
    },
    // css 相关的配置
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData 的内容会在每个 scss 文件的开头自动注入
                // 使用这个会影响scss的@use 规则 因为他是在第一行插入的
                // additionalData: `@import "${variablePath}";`
            }
        },
        // 进行 PostCSS 配置
        postcss: {
            plugins: [
                autoprefixer({
                    // 指定目标浏览器
                    overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
                }),
                postcssPxtorem({
                    rootValue: 20,
                    propList: ['*']
                }),
                cssnano({
                    preset: 'default'
                })
            ]
        }
    },
    assetsInclude: ['.txt'],
    optimizeDeps: {
        exclude: ['vue']
    }
})
