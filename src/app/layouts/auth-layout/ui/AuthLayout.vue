<script setup lang="ts">
import Logo from '@/shared/icons/Logo.svg';
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center justify-center bg-[url(/images/authBg.webp)] bg-cover bg-center bg-no-repeat">
    <div class="flex w-full max-w-xs flex-col items-center rounded-[15px] bg-white px-5 py-4">
      <Logo />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
