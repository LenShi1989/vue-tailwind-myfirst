<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <div
      v-for="i in 16"
      :key="i"
      class="bg-violet-400 text-white p-6 text-center rounded-lg"
    >
      {{ i }}
    </div>
  </div>
</template>
