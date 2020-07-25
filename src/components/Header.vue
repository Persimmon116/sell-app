<template>
  <div class="header">
    <div class="top">
      <img width="75" height="75" :src="shop.avatar" alt />
      <div class="info">
        <p class="title">
          <span class="label">品牌</span>
          <span>{{shop.name}}</span>
        </p>
        <p>{{shop.description}} / {{shop.deliveryTime}}分钟送达</p>
        <p v-if="shop.supports" class="activity">
          <span class="reduce">减</span>
          <span>{{shop.supports[0]}}</span>
        </p>
        <span class="count" @click="visible = true" v-if="shop.supports">
          {{shop.supports.length}}个
          <i class="iconfont icon-right"></i>
        </span>
      </div>
    </div>
    <div class="bottom">
      <span class="notice">公告</span>
      <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
      <van-notice-bar class="content" scrollable :text="shop.bulletin" />
      <i class="iconfont icon-right"></i>
    </div>
    <transition name="fade">
      <MaskLayer :shop="shop" @close="visible=false" v-show="visible" />
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);
import MaskLayer from "./MaskLayer.vue";
export default {
  props: ["shop"],
  components: {
    MaskLayer,
  },
  data() {
    return {
      //遮罩层显示隐藏
      visible: false,
      bgImg: "",
    };
  },
};
</script>
<style >
.van-notice-bar {
  color: #ffffff;
  background-color: transparent;
  padding: 0;
}
</style>
<style lang="less" scoped>
.header {
  flex: 0 0 160px;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/images/bgimg.jpg");
  .top {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    img {
      margin-right: 20px;
      flex: 0 0 75px;
      border-radius: 5px;
    }
    .info {
      flex: 1;
      position: relative;
      p {
        margin-bottom: 8px;
        .reduce {
          display: inline-block;
          background-color: #fff;
          width: 20px;
          height: 20px;
          line-height: 20px;
          font-weight: 700;
          text-align: center;
          color: #f00;
          font-size: 0.6rem;
          margin-right: 10px;
        }
      }
      .activity {
        display: flex;
        align-items: center;
      }
      .title {
        font-weight: bold;
        .label {
          margin-right: 10px;
          display: inline-block;
          background-color: #f00;
          width: 30px;
          height: 20px;
          line-height: 20px;
          font-size: 0.6rem;
          text-align: center;
          font-weight: 400;
        }
      }
      .count {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 26px;
        width: 60px;
        background-color: rgba(0, 0, 0, 0.8);
        font-size: 12px;
        text-align: center;
        border-radius: 13px;
        position: absolute;
        right: 10px;
        font-weight: 300;
        bottom: 10px;
      }
    }
  }
  .bottom {
    flex: 0 0 40px;
    padding: 15px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      color: #fff;
    }
    .notice {
      flex: 0 0 40px;
      color: #333;
      background-color: #fff;
      text-align: center;
      display: inline-block;
      width: 40px;
      height: 20px;
      line-height: 20px;
      font-size: 0.6rem;
      font-weight: 700;
      border-radius: 4px;
      margin-right: 5px;
    }
    .content {
      color: #fff;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      flex: 1;
      text-overflow: ellipsis;
    }
  }
  // 进入动画和离开动画的过程
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }

  // 进入动画的瞬间 和 离开动画的瞬间
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>