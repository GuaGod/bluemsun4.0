<template>
  <div>
    <my-header state="active"></my-header>
    <div class="page_container">
        <Row :gutter="16">
          <Col :lg="{span: 13, offset:2}" :md="{span: 24}">
            <top-blogs></top-blogs>
            <invitation>
              
            </invitation>
          </Col>
          <Col :lg="{span: 7}" :md="{span: 0}">
            <hot-blogs></hot-blogs>
            <navigate-block title="关注蓝旭" subTitle="报名通道" target=""></navigate-block>
            <navigate-block title="了解更多" subTitle="蓝旭简介" target=""></navigate-block>
          </Col>
        </Row>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script src="./Forum.js"></script>
<style lang="scss" src="./Forum.scss" scoped></style>