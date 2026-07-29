<script setup lang="ts">
import { Form, FormSubmitEvent } from '@primevue/forms';
import { reactive } from 'vue';

import { VFormItem } from '@/shared/ui/form-item';
import Button from '@/shared/ui/volt/Button.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Password from '@/shared/ui/volt/Password.vue';

import { signInSchemaModel, signInSchemaResolver } from '../model/signIn.model';

const form = reactive<signInSchemaModel>({ email: '', password: '' });

const submit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    console.log('form submitted');
  }
};
</script>

<template>
  <div class="flex w-full flex-col items-center gap-2">
    <h1 class="mt-1 text-lg font-bold">Вход</h1>
    <Form
      id="login-form"
      v-slot="$form"
      :initial-values="form"
      :resolver="signInSchemaResolver"
      :validate-on-value-update="false"
      validate-on-blur
      class="w-full"
      @submit="submit"
    >
      <VFormItem class="mb-2" :error="$form.email?.error?.message">
        <label for="email" class="text-xs font-semibold">E-mail</label>
        <InputText v-model="form.email" type="email" placeholder="Введите ваш e-mail" name="email" autocomplete="username" required />
      </VFormItem>
      <VFormItem :error="$form.password?.error?.message">
        <label for="password" class="text-xs font-semibold">Пароль</label>
        <Password
          v-model="form.password"
          fluid
          :feedback="false"
          toggle-mask
          placeholder="Пароль"
          name="password"
          :input-props="{
            autocomplete: 'current-password',
            required: true,
          }"
        />
      </VFormItem>
      <Button label="Войти" type="submit" class="mt-3.5 w-full" />
    </Form>
    <p class="mt-1 text-xs font-semibold">Нет аккаунта? <router-link to="/auth/sign-up" class="text-primary">Регистрация</router-link></p>
  </div>
</template>

<style scoped></style>
