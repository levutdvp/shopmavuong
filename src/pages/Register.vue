<template >
    <div class="q-pa-md" style="max-width: 400px">
        <q-form class="q-gutter-md">
            <p class="user-text">Tên tài khoản (Để đăng nhập vào SHOP)</p>        
            <q-input filled v-model="form.name" label="Nhập tài khoản" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            <p class="pass-text">Mật khẩu</p>
            <q-input filled v-model="form.password" type="password" label="Nhập mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            <p class="repass-text">Nhập lại mật khẩu</p>
            <q-input filled v-model="form.rePassword" type="password" label="Nhập lại mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            <p>Tên hiển thị trên web (khác với tên tài khoản)</p>
            <q-input filled v-model="form.account" label="Nhập tài khoản" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            <p class="email-text">Email... Để dùng lấy lại mật khẩu</p>
            <q-input filled v-model="form.email" label="Email... Để dùng lấy lại mật khẩu" :rules="[val => typeof val ==='string' && val.length > 0 || 'Please type something']"></q-input> 
            <p class="phone-text">Số điện thoại... Để dùng lấy lại mật khẩu</p>
            <q-input filled v-model="form.phone" label="SĐT... Để dùng lấy lại mật khẩu"></q-input> 

            <div>
                <q-btn label="Đăng ký" type="submit" color="red" @submit="onRegister"/>
                <q-btn label="Đăng nhập" type="reset" color="white" text-color="black" @submit="onLogin" flat class="q-ml-sm" />
              </div>
        </q-form>
    </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { reactive} from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar()
const router = useRouter()

const form = reactive({
    name: '',
    password: '',
    rePassword: '',
    account: '',
    email: '',
    phone: null,
})



 const onRegister = (): void => {
     $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Đăng ký thành công'
     })

     router.push('/login')
 }

 const onLogin = (): void => {
     $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Đăng nhập thành công'
     })
     router.push('/')
 }

</script>
<style scoped>
.user-text {
    margin-right: 20px;
}
.pass-text {
    margin-right: 220px;
}
.repass-text {
    margin-right: 170px;
}
.email-text {
    margin-right: 70px;
}
.phone-text {
    margin-right: 35px;
}
</style>