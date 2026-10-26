<script setup lang="ts">
import IconMtuci from '@/shared/icons/Mtuci.vue';
import type { YMap } from '@yandex/ymaps3-types';
import { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker';
import { shallowRef } from 'vue';
import { YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);

const markers: YMapMarkerProps[] = [
  {
    coordinates: [51.789682128109, 55.140428698122],
  },
  {
    coordinates: [54.76778893634, 57.108481458691],
  },
];
</script>

<template>
  <div>
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 9,
        },
      }"
      width="100%"
      height="100vh"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-marker v-for="(marker, index) in markers" :key="index" :settings="marker">
        <IconMtuci class="marker" />
      </yandex-map-marker>
    </yandex-map>
  </div>
</template>

<style scoped>
.marker {
  position: relative;
  width: 60px;
  height: 60px;
  text-align: center;
  font-weight: bold;
  line-height: 20px;
}
</style>
