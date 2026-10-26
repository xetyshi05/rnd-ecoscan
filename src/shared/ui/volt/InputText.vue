<template>
  <InputText
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  />
</template>

<script setup lang="ts">
import type { InputTextPassThroughOptions, InputTextProps } from 'primevue/inputtext';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ InputTextProps {}
defineProps<Props>();

const theme = ref<InputTextPassThroughOptions>({
  root: (options) => {
    return {
      class: [
        `p-inputtext appearance-none rounded-[5px] outline-hidden
        bg-[#f9f9f9]
        p-filled:bg-surface-50
        text-xs text-black
        placeholder:text-additional dark:placeholder:text-surface-400
        border border-[#e3e3e3]
        enabled:hover:border-primary
        enabled:focus:border-primary enabled:focus:bg-white
        disabled:bg-surface-200 disabled:text-surface-500
        dark:disabled:bg-surface-700 dark:disabled:text-surface-400
        p-invalid:border-marker/10 dark:p-invalid:border-red-300 p-invalid:bg-marker/10
        p-invalid:placeholder:text-red-600 dark:p-invalid:placeholder:text-red-400
        p-[7px] p-fluid:w-full
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-mob-small-reg p-large:px-[0.875rem] p-large:py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`,
        {
          'border-text p-invalid:border-marker bg-white': options.context.filled,
        },
      ],
    };
  },
});
</script>
