<template>
  <div class="cc-container">
    <!-- 此处将通过props从mytimeline.vue父组件接受数据 -->
    <!-- 然后在li中进行v-for遍历渲染DOM -->
    <ul>
      <li class="list-wrapper" @click="toggleRoundHint">
        <!-- 时间轴上的圆点 -->
        <div class="round-outter">
          <div class="round-inner" :class="showRound ? 'active' : ''"></div>
        </div>
        <!-- 日期区 -->
        <p class="date">5月2日 - 下午12:37</p>
        <p class="content">
          我是傲娇的铲屎官
        </p>
        <!-- 图片展示区 / 此处将从后端获取数据后通过v-for渲染 -->
        <scroll-view class="scroll-view" scroll-x>
          <ul class="img-list">
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day1-1.jpg" mode="aspectFill"/>
            </li>
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day1-2.png" mode="aspectFill"/>
            </li>
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day1-3.jpg" mode="aspectFill"/>
            </li>
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day1-4.jpg" mode="aspectFill"/>
            </li>
          </ul>
        </scroll-view>
        <!-- 赞+评论+分享组件 -->
        <div class="tools">
          <div class="obox like-btn" @click.stop="toggleLike">
            <span class="icon" :class="isLike ? 'icon-like_active' : 'icon-like'"></span>
            <span class="txt" :class="isLike ? 'a-color' : ''">赞</span>
          </div>
          <div class="obox comment-btn" @click.stop="toggleComment">
            <span class="icon icon-comment" :class="showComment ? 'icon-comment_active' : 'icon-comment'"></span>
            <span class="txt" :class="showComment ? 'a-color' : ''">评论</span>
          </div>
          <!-- 分享组件 -->
          <div class="obox share-btn">
            <div @click.stop="toggleShare">
              <span class="icon" :class="showShare ? 'icon-share_active' : 'icon-share'"></span>
              <span class="txt" :class="showShare ? 'a-color' : ''">分享</span>
            </div>
            <div class="share-group" v-show="showShare">
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
        <div class="comment-content" v-show="showComment">
          <ul class="list">
            <li class="item">
              <span class="user">堃：</span>
              <span class="txt">用颜色表示性别是可以的啊比如说粉色代表女，蓝色代表男，但是背景颜色需要改一下。不然看不清楚了。</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">刚画完我就后悔了</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">不然用标志吧，文字有颜色感觉太花了</span>
            </li>
            <li class="item">
              <span class="user">一个梨子：</span>
              <span class="txt">可以用黑白表示性别吗？</span>
            </li>
          </ul>
          <form>
            <div class="reply">
              <img class="avatar" src=""/>
              <input class="input" placeholder="评论"/>
              <button class="submit">发布</button>
            </div>
          </form>
        </div>
      </li>
      <!-- 下面2个li是模拟遍历后的结果 -->
      <li class="list-wrapper" @click="toggleRoundHint">
        <!-- 时间轴上的圆点 -->
        <div class="round-outter">
          <div class="round-inner" :class="showRound ? 'active' : ''"></div>
        </div>
        <!-- 日期区 -->
        <p class="date">5月2日 - 下午12:37</p>
        <p class="content">
          今天老子心情不是很好，别惹我
        </p>
        <!-- 图片展示区 / 此处将从后端获取数据后通过v-for渲染 -->
        <scroll-view class="scroll-view" scroll-x>
          <ul class="img-list">
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day2.jpg" mode="aspectFill"/>
            </li>
          </ul>
        </scroll-view>
        <!-- 赞+评论+分享组件 -->
        <div class="tools">
          <div class="obox like-btn" @click.stop="toggleLike">
            <span class="icon" :class="isLike ? 'icon-like_active' : 'icon-like'"></span>
            <span class="txt" :class="isLike ? 'a-color' : ''">赞</span>
          </div>
          <div class="obox comment-btn" @click.stop="toggleComment">
            <span class="icon icon-comment" :class="showComment ? 'icon-comment_active' : 'icon-comment'"></span>
            <span class="txt" :class="showComment ? 'a-color' : ''">评论</span>
          </div>
          <!-- 分享组件 -->
          <div class="obox share-btn">
            <div @click.stop="toggleShare">
              <span class="icon" :class="showShare ? 'icon-share_active' : 'icon-share'"></span>
              <span class="txt" :class="showShare ? 'a-color' : ''">分享</span>
            </div>
            <div class="share-group" v-show="showShare">
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
        <div class="comment-content" v-show="showComment">
          <ul class="list">
            <li class="item">
              <span class="user">堃：</span>
              <span class="txt">用颜色表示性别是可以的啊比如说粉色代表女，蓝色代表男，但是背景颜色需要改一下。不然看不清楚了。</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">刚画完我就后悔了</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">不然用标志吧，文字有颜色感觉太花了</span>
            </li>
            <li class="item">
              <span class="user">一个梨子：</span>
              <span class="txt">可以用黑白表示性别吗？</span>
            </li>
          </ul>
          <form>
            <div class="reply">
              <img class="avatar" src=""/>
              <input class="input" placeholder="评论"/>
              <button class="submit">发布</button>
            </div>
          </form>
        </div>
      </li>
      <li class="list-wrapper" @click="toggleRoundHint">
        <!-- 时间轴上的圆点 -->
        <div class="round-outter">
          <div class="round-inner" :class="showRound ? 'active' : ''"></div>
        </div>
        <!-- 日期区 -->
        <p class="date">5月2日 - 下午12:37</p>
        <p class="content">
          每位铲屎官都有一颗萌萌的心
        </p>
        <!-- 图片展示区 / 此处将从后端获取数据后通过v-for渲染 -->
        <scroll-view class="scroll-view" scroll-x>
          <ul class="img-list">
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day3-1.jpg" mode="aspectFill"/>
            </li>
            <li class="img-wrapper">
              <img src="../../static/img/timeline/day3-2.jpg" mode="aspectFill"/>
            </li>
          </ul>
        </scroll-view>
        <!-- 赞+评论+分享组件 -->
        <div class="tools">
          <div class="obox like-btn" @click.stop="toggleLike">
            <span class="icon" :class="isLike ? 'icon-like_active' : 'icon-like'"></span>
            <span class="txt" :class="isLike ? 'a-color' : ''">赞</span>
          </div>
          <div class="obox comment-btn" @click.stop="toggleComment">
            <span class="icon icon-comment" :class="showComment ? 'icon-comment_active' : 'icon-comment'"></span>
            <span class="txt" :class="showComment ? 'a-color' : ''">评论</span>
          </div>
          <!-- 分享组件 -->
          <div class="obox share-btn">
            <div @click.stop="toggleShare">
              <span class="icon" :class="showShare ? 'icon-share_active' : 'icon-share'"></span>
              <span class="txt" :class="showShare ? 'a-color' : ''">分享</span>
            </div>
            <div class="share-group" v-show="showShare">
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
        <div class="comment-content" v-show="showComment">
          <ul class="list">
            <li class="item">
              <span class="user">堃：</span>
              <span class="txt">用颜色表示性别是可以的啊比如说粉色代表女，蓝色代表男，但是背景颜色需要改一下。不然看不清楚了。</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">刚画完我就后悔了</span>
            </li>
            <li class="item">
              <span class="user">老菜鸡：</span>
              <span class="txt">不然用标志吧，文字有颜色感觉太花了</span>
            </li>
            <li class="item">
              <span class="user">一个梨子：</span>
              <span class="txt">可以用黑白表示性别吗？</span>
            </li>
          </ul>
          <form>
            <div class="reply">
              <img class="avatar" src=""/>
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
export default {
  data () {
    return {
      isLike: false,
      showComment: false,
      showShare: false,
      showRound: false
    }
  },
  methods: {
    toggleLike () {
      this.isLike = !this.isLike
    },
    toggleComment () {
      this.showComment = !this.showComment
    },
    toggleShare () {
      this.showShare = !this.showShare
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
