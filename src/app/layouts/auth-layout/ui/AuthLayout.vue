<script setup lang="ts">
import Logo from '@/shared/icons/Logo.svg'
</script>

<template>
  <div class="h-screen w-full bg-[url(/images/authBg.webp)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
    <div class="max-w-xs w-full bg-white rounded-[15px] py-4 px-5 flex flex-col items-center">
      <Logo />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
