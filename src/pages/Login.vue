<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Đăng nhập
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex-center">
        <q-card class="login-card">
          <q-card-section class="row items-center justify-center">
            <div>
              <h2 class="text-h6">Đăng nhập vào tài khoản của bạn</h2>
              <q-form @submit="submitForm">
                <q-input v-model="email" outlined label="Email" />
                <q-input v-model="password" outlined label="Mật khẩu" type="password" />
                <q-btn type="submit" color="primary" label="Đăng nhập" class="full-width" />
              </q-form>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const submitForm = () => {
  console.log('Đăng nhập với email:', email.value, 'và mật khẩu:', password.value);
};
</script>

<style scoped>
.login-card {
  max-width: 400px;
}
.full-width {
  width: 100%;
}
</style>
