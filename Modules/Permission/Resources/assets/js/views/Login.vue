<template>
  <h1>Form login</h1>
  {{errorMsg}}<br/>
  <button type="button" @click="register">Get token login</button>
</template>

<script setup>
import store from '../store';
import {useRouter} from 'vue-router';
import {ref} from 'vue';

const route = useRouter();
const user = {
  email: 'toan.doan@kilala.vn',
  password: '1234567894',
}
let errorMsg = ref('');
function register() {
  store.dispatch('login', user)
    .then(() => {
      route.push({
        name: 'Dashboard'
      })
    }).catch(err => {
      errorMsg.value = err.response.data.message
  })
}
</script>

<style scoped>

</style>
