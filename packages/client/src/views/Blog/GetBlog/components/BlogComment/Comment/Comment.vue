<template>
  <div clas="comment">
    <div class="comment-main">
      <div class="main-left">
        <img data-name="head" :src="comment.img" />
        <div>{{comment.username}}</div>
      </div>
      <div class="main-right">
        <div class="content" v-html="comment.content"></div>
        <ul class="sonReplyul">
          <li v-for="item in commentChildren" class="comment-item" v-bind:key="item.id">
            <div>
              <span class="fromer">{{item.fromer}}</span>
              <span>回复</span>
              <span class="toer">{{item.toer}}</span>
            </div>
            <div>
              {{item.content}}
              <span class="reply" :data-id="item.id" @click="onClickReply">回复</span>
              <textarea v-if="item.isReplyShow" v-model="item.replyContent"></textarea>
              <span
                class="reply-btn"
                :data-id="item.id"
                v-if="item.isReplyShow"
                @click="onClickSubmitReply"
              >确认</span>
            </div>
          </li>
        </ul>
        <div class="more" @click="onClickTip" :data-id="comment.commentId">{{tip}}</div>
      </div>
    </div>
  </div>
</template>

<script src="./Comment.js"></script>
<style lang="scss" src="./Comment.scss" scoped></style>