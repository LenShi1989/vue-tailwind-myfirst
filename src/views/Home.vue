<template>
  <div class="p-8 dark:bg-gray-800 dark:text-white min-h-screen">
    <h1 class="mb-4 font-bold">Test</h1>
    <div class="grid grid-rows-4 grid-cols-4 gap-1">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="handleClick1('rwd')"
      >
        跳轉到 RWD
      </button>

      <button
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 hover:bg-gradient-to-br focus:ring-4 via-cyan-500 to-cyan-600 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-cyan-800"
        @click="handleClick1('button')"
      >
        跳轉到 Button
      </button>

      <button
        type="button"
        class="text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-lime-800"
        @click="handleClick1('grid')"
      >
        跳轉到 Grid
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import router from "@/router";

// 跳轉的函數
const handleClick1 = (target: string) => {
  router.push(`/Test/${target}`);
};

const handleClick2 = (target: string) => {
  router.push(`/${target}`);
};
</script>
