<template>
  <div class="cc-container">
    <!-- 此处将通过props从mytimeline.vue父组件接受数据 -->
    <!-- 然后在li中进行v-for遍历渲染DOM -->
    <ul>
      <li v-for="(comment, index_comment) in commentdata.myTimeLine" :key="index_comment" class="list-wrapper" @click="toggleRoundHint">
        <!-- 时间轴上的圆点 -->
        <div class="round-outter">
          <div class="round-inner" :class="showRound ? 'active' : ''"></div>
        </div>
        <!-- 日期区 -->
        <p class="date">{{comment.date}}</p>
        <p class="content">
          {{comment.content}}
        </p>
        <!-- 图片展示区 / 此处将从后端获取数据后通过v-for渲染 -->
        <scroll-view class="scroll-view" scroll-x>
          <ul class="img-list">
            <li v-for="(img, index_img) in comment.imgs" :key="index_img" class="img-wrapper">
              <img :src="img" mode="aspectFill"/>
            </li>
          </ul>
        </scroll-view>
        <!-- 赞+评论+分享组件 -->
        <div class="tools">
          <div class="obox like-btn" @click.stop="toggleLike(comment)">
            <span class="icon" :class="comment.like ? 'icon-like_active' : 'icon-like'"></span>
            <span class="txt" :class="comment.like ? 'a-color' : ''">赞</span>
          </div>
          <div class="obox comment-btn" @click.stop="toggleComment(comment)">
            <span class="icon icon-comment" :class="comment.showComment ? 'icon-comment_active' : 'icon-comment'"></span>
            <span class="txt" :class="comment.showComment ? 'a-color' : ''">评论</span>
          </div>
          <!-- 分享组件 -->
          <div class="obox share-btn">
            <div @click.stop="toggleShare(comment)">
              <span class="icon" :class="comment.showShare ? 'icon-share_active' : 'icon-share'"></span>
              <span class="txt" :class="comment.showShare ? 'a-color' : ''">分享</span>
            </div>
            <div class="share-group" v-show="comment.showShare">
              <div class="wrapper">
                <span class="icon icon-weixin"></span>
                <span>微信朋友</span>
              </div>
              <div class="wrapper">
              <span class="icon icon-pengyouquan"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>
              <span>朋友圈</span>
              </div>
              <div class="wrapper">
                <span class="icon icon-copylink"></span>
                <span>复制链接</span>
              </div>
              <div class="dt"></div>
            </div>
          </div>
        </div>
        <!-- 评论内容 -->
        <div class="comment-content" v-show="comment.showComment">
          <ul class="list">
            <li v-for="(content, index_content) in comment.comments" :key="index_content" class="item">
              <span class="user">{{content.userName}}：</span>
              <span class="txt">{{content.content}}</span>
            </li>
          </ul>
          <form>
            <div class="reply">
              <img class="avatar" :src="commentdata.avatarLink"/>
              <input class="input" placeholder="评论"/>
              <button class="submit">发布</button>
            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    commentdata: {
      type: Object
    }
  },
  methods: {
    toggleLike (comment) {
      comment.like = !comment.like
    },
    toggleComment (comment) {
      if (!comment.showComment) {
        Vue.set(comment, 'showComment', true)
      } else {
        comment.showComment = !comment.showComment
      }
    },
    toggleShare (comment) {
      if (!comment.showShare) {
        Vue.set(comment, 'showShare', true)
      } else {
        comment.showShare = !comment.showShare
      }
    },
    toggleRoundHint () {
      this.showRound = !this.showRound
    }
  }
}
</script>

<style lang="sass" scoped>
  .cc-container
    .list-wrapper
      position: relative
      .round-outter
        position: absolute
        z-index: 10
        top: 0
        left: -26px
        width: 12px
        height: 12px
        border: 1px solid #ae9881
        border-radius: 50%
        background: #fff
        .round-inner
          display: none
          margin: 1px 0 0 1px
          width: 10px
          height: 10px
          background: #cd9057
          border-radius: 50%
          &.active
            display: block
      .date
        line-height: 16px
        font-size: 10px
        color: #cd9057
      .content
        margin-bottom: 4px
        line-height: 22px
        font-size: 14px
      // 图片展示区
      .scroll-view
        width: 296px
        white-space: nowrap
        .img-list
          font-size: 0
          .img-wrapper
            display: inline-block
            margin-right: 10px
            width: 100px
            height: 68px
            &:last-child
              margin-right: 0
            img
              width: 100px
              height: 68px
      // 赞+评论+分享组件
      .tools
        display: flex
        align-items: center
        height: 30px
        white-space: nowrap
        .icon
          margin-right: 4px
          font-size: 14px
          vertical-align: middle
        .obox
          margin-right: 10px
          .txt
            font-size: 10px
            vertical-align: middle
            color: #ababab
          .a-color
            color: #cd9057
        .share-btn
          position: relative
          .share-group
            position: absolute
            top: -85px
            left: 10px
            font-size: 10px
            border-radius: 5px
            background: #fff
            border: 1rpx solid #eff1f0
            box-shadow: 0 0 0 1px #ededed
            .wrapper
              padding-left: 6px
              width: 86px
              height: 26px
              display: flex
              align-items: center
              border-bottom: 1px solid #eff1f0
              &:last-child
                border-bottom: none
            .dt::before
              content: ''
              display: block
              position: absolute
              top: 80px
              left: 16px
              border-top: 6px solid #fff
              border-left: 3px solid transparent
              border-right: 3px solid transparent
      .comment-content
        padding: 8px
        width: 280px
        font-size: 12px
        color: #ababab
        background: #efefef
        .list
          .item
            span
              line-height: 20px
            .user
              color: #000
        .reply
          display: flex
          justify-content: space-between
          align-items: center
          .avatar
            width: 26px
            height: 26px
            border-radius: 50%
            background: #cd9057
          .input
            margin: 0 4px
            padding-left: 6px
            flex: 1
            background: #fff
            border: 2px solid #ebebeb
          .submit
            padding: 0 4px
            font-size: 12px
            background: transparent
            &::after
              border: none
</style>
