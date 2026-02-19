# 一、確認環境
## 1️⃣ 安裝 Node.js（建議 LTS）
```sh
node -v
npm -v
```

👉 若沒有安裝，請先安裝 Node.js LTS（18 或 20）

# 二、建立 Vue 3 + Vite 專案（官方方式）
## ✅ 方法一：使用 npm create vite@latest（最推薦）
```sh
npm create vite@latest my-vue-app
```

- 依序選擇：
```sh
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript / TypeScript
```

- 完成後：
```sh
cd my-vue-app
npm install
npm run dev
code .
```

- 部屬建立dist
```sh
npm run build
```

- 瀏覽器打開：
 - http://localhost:5173

# 🚀 三、安裝套件
➕ 加 Vue Router
✅ 一、安裝 Vue Router（v4）
```sh
npm install vue-router@4
```
```sh
pnpm add vue-router@4
```

✅ 二、建立 router 資料夾與路由設定
📁 建立檔案
```sh
src/
├─ router/
│  └─ index.ts
```

🧠 src/router/index.ts
```ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由表
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

✅ 三、建立 View 頁面
```sh
src/
├─ views/
│  ├─ Home.vue
│  └─ About.vue
```

Home.vue
```vue
<template>
  <h1>Home</h1>
</template>
```

About.vue
```vue
<template>
  <h1>About</h1>
</template>
```

✅ 四、在 main.ts 掛載 Router
🧠 src/main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
```

✅ 五、在 App.vue 放 Router View
🧠 App.vue
```vue
<template>
  <nav class="flex gap-4">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
```

✅ 六、設定路徑別名（@）
通常 Vite 已幫你設定好，但確認一下：
vite.config.ts
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

✅ 七、程式碼導航（TS）
```ts
import { useRouter } from 'vue-router'

const router = useRouter()

router.push('/about')
router.push({ name: 'Home' })
```

✅ 八、巢狀路由（常見後台用）
```ts
{
  path: '/admin',
  component: () => import('@/layouts/AdminLayout.vue'),
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/admin/Dashboard.vue')
    }
  ]
}
```

✅ 九、常見錯誤
❌ 頁面不切換

👉 忘記放 <RouterView />

❌ 找不到 @/views

👉 alias 沒設定或 TS 不認得
補充 tsconfig.json：
```ts
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```


➕ 加 Tailwind
```sh
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
pnpm install tailwindcss autoprefixer postcss

npx tailwindcss init -p

```

---

# 一、安裝必要套件（Vue + Vite 標準）
👉 TypeScript 專案（Vite + Vue + TS）
```sh
npm install -D eslint@^9

```

# 二、建立 eslint.config.mjs
eslint.config.mjs
```mjs
// eslint.config.mjs
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
```

# 一、安裝 Pinia
```sh
npm install pinia
# or
pnpm add pinia
# or
yarn add pinia
```

# 二、在 main.ts 註冊 Pinia（必要）
src/main.ts
```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css' // Tailwind

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

---

# 一、Tailwind「一定要匯入的 3 行」
📍 src/style.css（或 main.css）
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
👉 這 3 行就是 Tailwind 的本體

# 二、在 main.ts 匯入 Tailwind（最重要）
📍 src/main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'   // 👈 一定要有

createApp(App).mount('#app')
```
❗ 沒有這行，Tailwind 永遠不會生效

# 三、Tailwind 設定檔（一定要有）
📍 tailwind.config.js
```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
👉 content 寫錯 = 樣式完全不會出現

# 四、PostCSS 設定（Vite 會用到）
📍 postcss.config.js
```ts
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

# 五、開始使用 Tailwind（Vue 元件）
```html
<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold text-blue-600">
      Hello Tailwind
    </h1>

    <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded">
      Button
    </button>
  </div>
</template>
```
👉 不需要 import tailwind
👉 class 直接寫就好

# 六、常見「匯入失敗」原因 TOP 5（超常見）
❌ 1. 忘記在 main.ts import CSS
```ts
import './style.css' ❌（不存在）
```
✅ 檔名要對

❌ 2. content 路徑寫錯
```ts
content: ['./src/**/*.vue'] ❌
```
✅ 正確：
```ts
content: ['./src/**/*.{vue,js,ts,jsx,tsx}']
```

❌ 3. Tailwind 套件沒裝齊
```sh
npm list tailwindcss postcss autoprefixer
```

# 啟動環境
.env：所有模式預設載入。
.env.development：僅在開發模式（npm run serve/dev）載入。
.env.production：僅在生產模式（npm run build）載入。

一、Vite 的 .env 規則（一定要先知道）
✅ 只有 VITE_ 開頭 的變數

👉 才能在前端程式碼中使用
```sh
VITE_API_URL=https://api.example.com
```
❌ 下面這個在前端拿不到：
```sh
API_URL=https://api.example.com
```

二、建立 .env 檔案（最常用）
📁 專案根目錄
```cpp
.env                // 所有環境通用
.env.development    // npm run dev
.env.production     // npm run build
.env.local          // 本機用（不進 git）
```

三、實際範例（你直接照用）
.env.development
```sh
VITE_APP_NAME=My App (Dev)
VITE_API_URL=http://localhost:8080
VITE_PORT=3000
```

四、在 Vite 設定中使用（例如改 port）
vite.config.ts
```ts
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    server: {
      port: Number(env.VITE_PORT),
    },
  }
})
```

五、在 Vue 元件 / TS 中使用
任意 .vue 或 .ts
```ts
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
```

六、TypeScript 型別補齊（推薦）
📍 src/env.d.ts
```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```
👉 TS 不會再報錯
👉 IDE 有自動補字

七、API 實戰用法（超常見）
```ts
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default api
```

八、⚠️ 超重要安全提醒
❌ 千萬不要放在 .env
```sh
VITE_DB_PASSWORD=123456 ❌
VITE_SECRET_KEY=xxx ❌
```

九、常見問題快速排查
❓ 為什麼拿不到 .env？
| 原因              | 解法                   |
| --------------- | -------------------- |
| 忘記 `VITE_`      | 加上                   |
| dev server 沒重開  | 重開                   |
| `.env` 放錯層      | 放專案根                 |
| 用 `process.env` | 改成 `import.meta.env` |

十、一句話記住
Vite 前端環境變數 = .env + VITE_ + import.meta.env

---

# 啟動時開指定port

## ✅ 方法一（最推薦）：修改 vite.config.ts
📍 vite.config.ts
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,      // 👈 改成你要的
    strictPort: true // 👈 如果被佔用就直接報錯
  }
})
```

## ✅ 方法二：用指令指定（臨時）
```sh
npm run dev -- --port 4000
```

## ✅ 方法三：用 .env（可切環境）
📍 .env.development
`VITE_PORT=5173`

vite.config.ts
```ts
export default defineConfig({
  server: {
    port: Number(process.env.VITE_PORT),
  },
})
```


