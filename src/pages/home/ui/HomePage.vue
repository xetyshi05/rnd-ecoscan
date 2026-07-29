<script setup lang="ts">
import type { DomEventHandler, YMap } from '@yandex/ymaps3-types';

import { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker';
import axios from 'axios';
import { ref, shallowRef, useId } from 'vue';
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapListener,
  YandexMapMarker,
} from 'vue-yandex-maps';

import IconMtuci from '@/shared/icons/Mtuci.vue';

const map = shallowRef<null | YMap>(null);

axios
  .get('https://skf-ecoscan.ru/api/points/get_points?limit=1500', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization:
        'Bearer REDACTED',
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

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
