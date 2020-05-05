<template>
  <div class="container">
      <div class="title">{{title}}</div>
      <div class="main">
          <router-link :to="target" class="sub_title">{{subTitle}}</router-link>
      </div>
  </div>
</template>

<script src="./NavigateBlock.js"></script>
<style lang="scss" src="./NavigateBlock.scss" scoped></style>