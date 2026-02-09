# 🚀 一、確認環境
## 1️⃣ 安裝 Node.js（建議 LTS）
node -v
npm -v

👉 若沒有安裝，請先安裝 Node.js LTS（18 或 20）

# 🚀 二、建立 Vue 3 + Vite 專案（官方方式）
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
npx tailwindcss init -p
pnpm install tailwindcss autoprefixer postcss
```




