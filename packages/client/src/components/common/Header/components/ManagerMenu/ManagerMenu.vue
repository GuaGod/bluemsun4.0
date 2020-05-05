<template>
  <div class="managerLoginBox">
    <div class="title">
      <img :src="headUrl" class="head" />
      {{username}}
    </div>
    <div class="body">
      <div @click="onClickSelfInformation">个人资料</div>
      <div @click="onClickSelfBlog">我的博客</div>
      <div @click="onClickWriteBlog">写博客</div>
      <div @click="onClickConsole">控制台</div>
      <div @click="onClickNotice">通知</div>
      <div @click="onClickQuit">退出</div>
    </div>
  </div>
</template>

<script src="./ManagerMenu.js"></script>
<style lang="scss" scoped src="./ManagerMenu.scss"></style>