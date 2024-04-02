<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
    </q-header>
    <q-page-container>
      <q-page class="flex-center">
        <q-card class="login-card">
          <q-card-section class="row items-center justify-center">
            <div>
              <h2 class="text-h6">Đăng nhập tài khoản</h2>
              <q-form>
                <p class='user-text'>Tên tài khoản</p>
                <q-input v-model="username" outlined label="Nhập tài khoản" />
                <p class="pass-text">Mật khẩu</p>
                <q-input v-model="password" outlined label="Nhập mật khẩu" type="password" />
                <q-btn type="button" color="red" label="Đăng nhập" class="full-width" @click="submitLogin"/>
                <q-btn type="button" color="white" text-color="black" label="Tạo tài khoản" class="full-width" @click="submitRegister"/>
                <q-btn type="button" color="primary" label="Quên mật khẩu" class="full-width" @click="onReset"/>
              </q-form>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

const submitLogin = () : void => {
    router.push('/')
};

const submitRegister = () : void => {
    router.push('/register')
};

const onReset = () : void =>{
  router.push('/reset')
}
</script>

<style scoped>
.user-text {
  margin-top: 10px;
  margin-right: 270px;
}
.pass-text {
  margin-top: 10px;
  margin-right: 300px;
}
.login-card {
  max-width: 400px;
}
.full-width {
  width: 100%;
  margin-top: 10px;
}
</style>
