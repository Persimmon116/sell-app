<template>
  <div class="food-info">
    <!-- 关闭按钮 -->
    <span class="close iconfont icon-guanbi" @click="close"></span>
    <img style="width:100%;height:300px" :src="food.imgUrl" alt />
    <div class="name">
      <h1 class="title">{{food.name}}</h1>
      <p class="desc">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
      <p class="price">
        ￥{{food.price}}
        <span>￥28</span>
      </p>
      <van-button class="btn" size="small" round type="info">加入购物车</van-button>
    </div>
    <div class="food-int">
      <h1 class="title">商品介绍</h1>
      <p class="text">{{food.goodsDesc}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
export default {
  props: ["food"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.food-info {
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f4f5f7;
  width: 100%;
  height: 100%;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: #fff;
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .name {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    .title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .desc {
      font-size: 12px;
      color: #9c9e9b;
      margin-bottom: 20px;
    }
    .price {
      color: #f00;
      span {
        text-decoration: line-through;
        color: #9c9e9b;
      }
    }
    .btn {
      position: absolute;
      right: 20px;
      bottom: 10px;
      color: #fff;
      width: 100px;
    }
  }
  .food-int {
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    background-color: #fff;
    .title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .text {
      color: #9c9e9b;
      line-height: 26px;
    }
  }
}
</style>