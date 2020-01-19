<template>
  <div class="managerLoginBox">
    <div class="title">
      <img src="${this.self.user.img}" class="head" />
      ${this.self.user.name}
    </div>
    <div class="body">
      <div id="getSelf">个人资料</div>
      <div id="getBlogs">我的博客</div>

      <div id="writeBlog">写博客</div>
      <div id="control">控制台</div>
      <div id="notices">通知</div>
      <div id="quit">退出</div>
    </div>
  </div>
</template>

<script src="./ManagerMenu.js"></script>
<style lang="scss" scoped src="./ManagerMenu.scss"></style>