<template >
    <div class="q-pa-md" style="max-width: 400px">
        <q-form class="q-gutter-md"  @submit="onsubmit" @reset="onReset">
            Tên tài khoản (Để đăng nhập vào SHOP)
            <q-input filled v-model="name" label="Nhập tài khoản" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            Mật khẩu
            <q-input filled v-model="password" label="Nhập mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            Nhập lại mật khẩu
            <q-input filled v-model="rePassword" label="Nhập lại mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            Tên hiển thị trên web (khác với tên tài khoản)
            <q-input filled v-model="account" label="Nhập tài khoản" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            Email... Để dùng lấy lại mật khẩu
            <q-input filled v-model="email" label="Email... Để dùng lấy lại mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            Số điện thoại... Để dùng lấy lại mật khẩu
            <q-input filled v-model="phone" label="SĐT... Để dùng lấy lại mật khẩu"></q-input> 

            <div>
                <q-btn label="Đăng ký" type="submit" color="red"/>
                <q-btn label="Đăng nhập" type="reset" color="#666" flat class="q-ml-sm" />
              </div>
        </q-form>
    </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar()
const name = ref(null)
const password = ref(null)
const rePassword = ref(null)
const account = ref(null)
const email = ref(null)
const phone = ref(null)
 const accept = ref(false)

 const onsubmit = (): void => {
     $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Đăng nhập thành công'
     })
 }

 const onReset = (): void => {
     accept.value = false
 }

</script>
<style scoped>
    
</style>