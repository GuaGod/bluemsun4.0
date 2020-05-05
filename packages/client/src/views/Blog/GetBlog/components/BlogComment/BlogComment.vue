<template>
  <Row>
    <Col :lg="{span: 24}" :md="{span: 24}">
      <div class="container">
        <div class="title">
          <div></div>
          <div id="replyTop" name="replyTop">回帖</div>
          <div></div>
        </div>
        <ul id="comment-ul">
          <comment v-for="item in commentArray" :comment="item" v-bind:key="item.commentId"></comment>
        </ul>
        <div class="page-container">
          <div class="comment_none_tip" v-if="commentArray.length === 0">暂无评论</div>
          <div class="naviagte_container" v-if="commentArray.length !== 0">
            <Page :total="total" show-elevator :current="currentPage" @on-change="onChangePage" />
          </div>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script src="./BlogComment.js"></script>
<style lang="scss" src="./BlogComment.scss" scoped></style>