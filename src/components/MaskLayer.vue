<template>
  <div class="mask-layer">
    <i @click="close" class="iconfont icon-guanbi"></i>
    <div class="shop-info">
      <p class="title">{{shop.name}}</p>
      <van-rate
        class="score"
        v-model="shop.score"
        :size="25"
        readonly
        color="#ffd21e"
        void-icon="star"
        allow-half
        void-color="#eee"
      />
      <div class="discountInfo">
        <span class="line"></span>
        <span class="info">优惠信息</span>
        <span class="line"></span>
      </div>
      <div class="infoItem">
        <p class="one" v-if="shop.supports">
          <span>惠</span>
          {{shop.supports[0]}}
        </p>
        <p class="two" v-if="shop.supports">
          <span>折</span>
          {{shop.supports[1]}}
        </p>
      </div>
      <div class="discountInfo">
        <span class="line"></span>
        <span class="info">商家公告</span>
        <span class="line"></span>
      </div>
      <p class="notice">{{shop.bulletin}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Rate } from "vant";
Vue.use(Rate);
export default {
  data() {
    return {};
  },
  props: ["shop"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.mask-layer {
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  i {
    font-size: 20px;
    color: #fff;
    position: absolute;
    bottom: 150px;
    left: 48%;
  }
  .shop-info {
    width: 100%;
    height: 420px;
    position: absolute;
    top: 50%;
    margin-top: -250px;
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      color: #fff;
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
    .score {
      margin-bottom: 20px;
    }
    .discountInfo {
      color: #fff;
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
      .info {
        margin: 0 10px;
      }
      .line {
        display: inline-block;
        width: 110px;
        height: 6px;
        border-top: 1px solid #fff;
      }
    }
    .infoItem {
      width: 100%;
      margin-bottom: 10px;
      .two {
        span {
          color: rgb(34, 38, 238);
        }
      }
      p {
        font-weight: 400;
        width: 100%;
        color: #fff;
        span {
          color: #000;
          display: inline-block;
          width: 20px;
          height: 20px;
          font-size: 0.7rem;
          font-weight: bold;
          text-align: center;
          line-height: 20px;
          border-radius: 2px;
          background-color: #fff;
          margin-right: 10px;
          margin-bottom: 15px;
        }
      }
    }
    .notice {
      color: rgb(236, 229, 229);
      line-height: 24px;
    }
  }
}
</style>