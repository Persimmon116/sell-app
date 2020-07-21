<template>
  <div class="shop-car">
    <div class="left" @click="vsible =!vsible">
      <span class="car iconfont icon-gouwuche">
        <span class="num">1</span>
      </span>
      <p class="price">￥0</p>
      <p class="center">另需配送费 ￥ 4元</p>
    </div>
    <button class="btn">￥20起送</button>

    <!-- 上拉框 -->
    <van-action-sheet v-model="vsible" title="标题">
      <div class="content">内容</div>
    </van-action-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet } from "vant";

Vue.use(ActionSheet);
export default {
  data() {
    return {
      vsible: false
    };
  },
  methods: {
    close() {
      this.vsible = false;
    }
  }
};
</script>
<style scoped>
.content {
  padding: 16px 16px 160px;
}
</style>
<style lang="less" scoped>
.shop-car {
  z-index: 999;
  flex: 0 0 50px;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141c27;
  position: relative;
  .left {
    flex: 1;
    display: flex;
    z-index: 999;
    .car {
      position: absolute;
      left: 10px;
      top: -10px;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid #444;
      background-color: #2b343d;
      color: #808589;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      .num {
        position: absolute;
        top: -5px;
        right: -5px;
        display: inline-block;
        height: 15px;
        width: 15px;
        font-size: 12px;
        color: #fff;
        border-radius: 50%;
        background-color: red;
        text-align: center;
        line-height: 15px;
      }
    }
    .price {
      color: #73787c;
      height: 30px;
      flex: 0 0 40px;
      line-height: 30px;
      border-right: 1px solid #eee;
      margin-left: 60px;
      font-weight: 700;
      font-size: 12px;
    }
    .center {
      margin-left: 10px;
      color: #73787c;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
  }
  .btn {
    height: 50px;
    line-height: 50px;
    color: #73787c;
    font-size: 12px;
    outline: none;
    font-weight: 700;
    border: none;
    width: 100px;
    background-color: #2b343b;
  }
  .van-overlay {
    z-index: 1 !important;
  }
  .van-popup {
    border-radius: 0;
    // z-index: 1;
  }
}
</style>