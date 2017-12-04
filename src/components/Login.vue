<template>
<div>
  <div id="login" class="login">
    用户名 <input type="text" name="username" v-model="username" /><br>
    密码 <input type="password" name="password" v-model="password" />
  </div>
  <button @click="login()">登陆</button>
</br>
  <img src="../image/1.jpg" />
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from '../router'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: false,
    }
  },
  methods:{
    login(){
      this.$http.post(
    'http://localhost:8010/receive',
    // 请求账号密码发送数据给服务端
    {
        username: this.username,
        password: this.password,
    }).then(function (resp) {
        console.log(resp);
        alert(resp.body.id);
        // 成功回调
    }, function (resp) {
        // 失败回调
        console.log(resp);
        alert('error');
    });
    }
  }
}
</script>
<style>
.login {
  text-align: center;
  position: relative;
}
</style>
