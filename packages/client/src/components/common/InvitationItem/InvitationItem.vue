<template>
  <li class="invitation_container">
    <div class="logo">
      <router-link to="./myBlogs.html?userId=${data.list[i].userId}">
        <img :src="invitation.headUrl" />
      </router-link>
    </div>
    <div class="first-line">
      <div class="class">{{invitation.blogClass}}</div>
      <router-link
        class="title"
        :to="'./getBlog/' + invitation.blogId"
        target="_blank"
      >{{invitation.title}}</router-link>
    </div>
    <div class="second-line">
      <div class="author">{{invitation.username}}</div>
      <div class="date">{{invitation.date}}</div>
      <div class="desc">{{invitation.desc}}</div>
      <div class="readNum">阅读量：{{invitation.readNum}}</div>
    </div>
  </li>
</template>

<script src="./InvitationItem.js"></script>
<style lang="scss" src="./InvitationItem.scss" scoped></style>