import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  vue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  {
    ignores: ['node_modules', 'dist', 'public', 'src/shared/ui/volt'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['src/shared/icons/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  prettier,
);
