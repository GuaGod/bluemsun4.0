<template>
  <Row id="header" class="header" :class="'header-' + headerState">
    <Col class="left" :lg="{span:3}" :md="{span:6}" :xs="{span:7}">
      <router-link to="/">BluemSun</router-link>
    </Col>
    <Col class="right" :lg="{span:21}" :md="{span:18}" :xs="{span:17}">
      <ul id="header-ul">
        <li @click="onClickApplication" class="toolLi hot">报名hot</li>
        <li @click="onClickBlogs" class="toolLi">博客区</li>
        <li @click="onClickNews" class="toolLi">新闻区</li>
        <li @click="onClickProductions" class="toolLi">作品区</li>
        <li class="toolLi" id="user">
          <img
            class="user_default_head"
            src="@/assets/images/common/user_default_head.png"
            @click="onClickUserHead"
          />
          <component v-if="isCurrentMenuShow" :is="currentMenu" @onClickLogin="onClickLogin"></component>
        </li>
      </ul>
    </Col>
    <login-layer :is-show="isLoginLayerShow"
                 @close="onClickCloseLoginLayer"
                 @login="onHandleLoginSuccess"></login-layer>
  </Row>
</template>

<script src="./Header.js"></script>
<style lang="scss" scoped src="./Header.scss"></style>