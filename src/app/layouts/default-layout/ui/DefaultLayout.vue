<template>
  <router-view />
  <footer class="sticky bottom-2 z-50 w-full py-2">
    <nav class="relative mx-4">
      <ul
        class="bg-bg-secondary shadow-primary mx-auto flex max-w-[300px] items-center justify-between rounded-2xl px-4 py-4 shadow-md sm:max-w-[370px]"
      >
        <li>
          <router-link to="/about">
            <IconQuestion />
          </router-link>
        </li>
        <li></li>

        <li>
          <router-link to="/">
            <IconMap />
          </router-link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import IconMap from '@/shared/icons/Map.vue';
import IconQuestion from '@/shared/icons/Question.vue';
</script>
