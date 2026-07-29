<script setup lang="ts">
import { Form, FormSubmitEvent } from '@primevue/forms';
import { reactive } from 'vue';

import { VFormItem } from '@/shared/ui/form-item';
import Button from '@/shared/ui/volt/Button.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Password from '@/shared/ui/volt/Password.vue';

import { signUpSchemaModel, signUpSchemaResolver } from '../model/signUp.model';

const form = reactive<signUpSchemaModel>({ fio: '', email: '', password: '', password_confirmation: '' });

const submit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    console.log('form submitted');
  }
};
</script>

<template>
  <div class="flex w-full flex-col items-center gap-2">
    <h1 class="mt-1 text-lg font-bold">Регистрация</h1>
    <Form
      id="signup-form"
      v-slot="$form"
      :resolver="signUpSchemaResolver"
      :initial-values="form"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex w-full flex-col gap-3"
      @submit="submit"
    >
      <VFormItem class="mb-2" :error="$form.fio?.error?.message">
        <label for="fio" class="text-xs font-semibold">ФИО</label>
        <InputText v-model="form.fio" placeholder="Иванов Иван Иванович" name="fio" autocomplete="fio" required />
      </VFormItem>
      <VFormItem class="mb-2" :error="$form.email?.error?.message">
        <label for="email" class="text-xs font-semibold">E-mail</label>
        <InputText v-model="form.email" type="email" placeholder="ivanovivan@ecoscan.ru" name="email" autocomplete="username" required />
      </VFormItem>
      <VFormItem class="mb-2" :error="$form.password?.error?.message">
        <label for="password" class="text-xs font-semibold">Пароль</label>
        <Password
          v-model="form.password"
          fluid
          :feedback="false"
          toggle-mask
          placeholder="Придумайте пароль"
          name="password"
          :input-props="{
            autocomplete: 'current-password',
            required: true,
          }"
        />
      </VFormItem>
      <VFormItem :error="$form.password_confirmation?.error?.message">
        <label for="password_confirmation" class="text-xs font-semibold">Повторите пароль</label>
        <Password
          v-model="form.password_confirmation"
          fluid
          :feedback="false"
          toggle-mask
          placeholder="Повторите пароль"
          name="password_confirmation"
          :input-props="{
            autocomplete: 'current-password',
            required: true,
          }"
        />
      </VFormItem>
      <Button label="Зарегистрироваться" type="submit" class="mt-3.5 w-full" />
    </Form>
    <p class="mt-1 text-xs font-semibold">Уже есть аккаунт? <router-link to="/auth/sign-in" class="text-primary">Войти</router-link></p>
  </div>
</template>

<style scoped></style>
