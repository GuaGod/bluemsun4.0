<template>
  <div class="good-production" span="24">
    <Row class="title">{{title}}</Row>
    <Row class="title-sub">{{subTitle}}</Row>
    <Row>
      <Col :lg="{span: 18, offset: 3}" :md="{span:24}" class="pro-container">
        <div class="production" v-for="production in productions" :key="production.id">
          <div class="img">
            <img :src="production.imgUrl"/>
          </div>
          <div class="t1">{{production.title}}</div>
          <div class="t2">{{production.subTitle}}</div>
        </div>
      </Col>
    </Row>
    <Row class="btn-container">
      <div class="btn btn-info">
        <router-link :to="more">更多作品&gt;</router-link>
      </div>
    </Row>
  </div>
</template>

<script src="./Production.js"></script>
<style lang="scss" scoped src="./Production.scss"></style>
