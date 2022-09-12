<script setup>

</script>

<template>
  <div class="app">
    hi
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 text-white;
}

.link {
  @apply text-emerald-400 underline cursor-pointer;
}
</style>
