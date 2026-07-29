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
        <li>
<!--          <router-link to="/profile">-->
<!--            <IconUser />-->
<!--          </router-link>-->
        </li>

        <li>
          <router-link to="/">
            <IconMap />
          </router-link>
        </li>
        <li>
<!--          <router-link to="/notifications">-->
<!--            <IconBell />-->
<!--          </router-link>-->
        </li>
        <li>
<!--          <router-link to="/markers">-->
<!--            <IconAlbum />-->
<!--          </router-link>-->
        </li>
      </ul>
      <!--      <input-->
      <!--        type="file"-->
      <!--        accept="image/*"-->
      <!--        capture="environment"-->
      <!--        ref="fileInput"-->
      <!--        @change="handlePhoto"-->
      <!--        style="display: none"-->
      <!--      />-->

      <!-- <div
        v-if="photoDataUrl"
        class="absolute top-0 left-0 right-0 w-full h-full"
      >
        <h3>Предпросмотр:</h3>
        <img
          :src="photoDataUrl"
          alt="Фото"
          style="max-width: 100%; border: 1px solid #ccc"
        />
      </div> -->
    </nav>
  </footer>
</template>

<script setup lang="ts">
import IconAlbum from '@/shared/icons/Album.vue';
import IconBell from '@/shared/icons/Bell.vue';
import IconMap from '@/shared/icons/Map.vue';
import IconQuestion from '@/shared/icons/Question.vue';
import IconUser from '@/shared/icons/User.vue';
</script>
