<template>
  <div class="menuBase_container">
    <div class="title">
      <img :src="headUrl" class="head" />
      {{username}}
    </div>
    <div class="body">
      <div id="getSelf" @click="onClickSelfInformation">个人资料</div>
      <div id="getBlogs" @click="onClickSelfBlog">我的博客</div>
      <div id="writeBlog" @click="onClickWriteBlog">写博客</div>
      <slot name="console" @click="onClickConsole"></slot>
      <div id="notices" @click="onClickNotice">通知</div>
      <div id="quit" @click="onClickQuit">退出</div>
    </div>
  </div>
</template>

<script src="./MenuBase.js"></script>
<style src="./MenuBase.scss" scoped lang="scss"></style>