<template>
  <div id="loginLayer" v-if="isShow">
    <div class="title">
      欢迎登录
      <div class="close" @click="onClickCloseLoginLayer"></div>
    </div>
    <div class="body">
      <div class="username">
        <input type="text" id="username" placeholder="请输入6-16位用户名" v-model="username"/>
      </div>
      <div class="password">
        <input type="password" id="password" placeholder="请输入6-16位密码" v-model="password"/>
      </div>
    </div>
    <div class="bottom">
      <Button type="success" @click="onClickLogin" @keyup.enter="onClickLogin">确认登录</Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>