<template>
  <div class="p-8 dark:bg-gray-800 dark:text-white min-h-screen">
    <h1 class="mb-4 font-bold">RWD</h1>
    <div class="grid grid-rows-4 grid-cols-4 gap-1">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="handleClick1('rwd')"
      >
        跳轉到 RWD
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import router from "@/router";

// 跳轉的函數
const handleClick1 = (target: string) => {
  router.push(`/${target}`);
};

const handleClick2 = (target: string) => {
  router.push(`/${target}`);
};
</script>
