<template>
  <div class="blogs" :lg="{span: 24}">
    <Row class="title">{{title}}</Row>
    <Row class="title-sub">{{subTitle}}</Row>
    <Row class="blog-container">
      <Col class="blog-new">
        <div class="t">最新博客</div>
        <ul id="blog-ul">
           <li v-for="blog in blogList" :key="blog.blogId">{{blog.title}}</li>
        </ul>
      </Col>
      <Col class="blog-classify">
        <div class="t">博客分类</div>
        <div class="classify" id="classify">
          <div v-for="item in classify" class="con" :data-id="item.id" :key="item.id">
            <img :src="item.imgUrl" />
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>