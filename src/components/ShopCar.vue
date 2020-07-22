<template>
  <div class="shop-car">
    <div class="shop">
      <div class="left" @click="vsible =!vsible">
        <span :class="{active:sum!==0}" class="car iconfont icon-gouwuche">
          <span class="num" v-if="sum !==0">{{sum}}</span>
        </span>
        <p class="price" v-if="totalPrice==0">未选购商品</p>
        <p class="price" v-else>￥{{totalPrice}}</p>
        <p class="center">另需配送费 ￥ {{shop.deliveryPrice}}元</p>
      </div>
      <p class="btn" v-if="totalPrice==0">￥{{shop.minPrice}}起送</p>
      <button
        class="btn"
        style="background-color:#38ca73;"
        v-else-if="totalPrice>=shop.minPrice"
      >去结算</button>
      <p
        class="btn"
        style="background-color:#535356;"
        v-else
      >差{{(shop.minPrice-totalPrice).toFixed(2)}}起送</p>
    </div>

    <van-action-sheet v-model="vsible">
      <div class="content" id="content">
        <div class="title">
          <span>已选商品</span>
          <span @click="clear">清空</span>
        </div>
        <ul class="list">
          <li v-for="food in shopList" :key="food.id">
            <div class="food">
              <span class="name">{{food.name}}</span>
              <span class="price">￥{{food.price}}</span>
            </div>
            <div class="count">
              <i
                v-if="food.count>0"
                @click.stop="changeNum(food.name,-1)"
                class="iconfont icon-jian"
              ></i>
              <span v-if="food.count>0">{{food.count}}</span>
              <i @click.stop="changeNum(food.name,1)" class="iconfont icon-jia"></i>
            </div>
          </li>
        </ul>
      </div>
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
  props: ["shop"],
  methods: {
    // 清空购物车
    clear() {
      this.shopList.forEach(v => {
        // 将商品数量变为0
        v.count = 0;
      });
      // 清空总数量
      this.$store.commit("CLEAR");
      // 关闭弹窗
      this.vsible = false;
    },
    // 关闭
    close() {
      this.vsible = false;
    },
    // 商品增加减少
    changeNum(name, num) {
      this.$store.commit("CHAGE_NUM", { name, num });
      let a = 0;
      for (let v of this.shopList) {
        a += v.price * v.count;
      }
      // console.log(a);
      if (this.sum < 1) {
        this.vsible = false;
      }
    }
  },
  computed: {
    // 商品列表
    shopList() {
      return this.$store.getters.shopList;
    },
    // 总数量
    sum() {
      return this.$store.state.sum;
    },
    // 总价
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.shop-car {
  flex: 0 0 50px;
  height: 50px;
  > .shop {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141c27;
    position: relative;
    z-index: 999;
    .left {
      flex: 1;
      display: flex;
      justify-content: space-around;
      .car {
        position: absolute;
        z-index: 100;
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
        &.active {
          background-color: #3190e8;
          color: #fff;
        }
        .num {
          position: absolute;
          top: -8px;
          right: -10px;
          display: inline-block;
          height: 20px;
          width: 20px;
          font-size: 12px;
          color: #fff;
          border-radius: 50%;
          background-color: red;
          text-align: center;
          line-height: 20px;
        }
      }
      .price {
        color: #73787c;
        height: 30px;
        flex: 0 0 65px;
        box-sizing: border-box;
        line-height: 30px;
        border-right: 1px solid #eee;
        margin-left: 70px;
        font-weight: 700;
        font-size: 12px;
      }
      .center {
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
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 100px;
      z-index: 12;
      background-color: #2b343b;
    }
  }
  /deep/.van-overlay {
    z-index: 10 !important;
  }
  .van-popup {
    height: 50%;
    border-radius: 0;
    z-index: 11 !important;
    .van-action-sheet__content {
      height: 300px;
      overflow: hidden;
    }
  }
  .content {
    padding: 0 0 160px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    flex-direction: column;
    .title {
      flex: 0 0 40px;
      display: flex;
      justify-content: space-between;
      background-color: #eceff1;
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
    }
    .list {
      height: 240px;
      width: 100%;
      overflow-y: scroll;
      position: absolute;
      top: 40px;
      li {
        font-size: 18px;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f6f7;
        display: flex;
        align-items: center;
        .food {
          flex: 1;
          display: flex;
          justify-content: space-between;
          margin-right: 40px;
          .name {
            width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
            font-weight: 400;
          }
          .price {
            flex: 0 0 50px;
            color: #f00;
            font-weight: 600;
          }
        }
        .count {
          span {
            font-size: 14px;
            margin: 0 5px;
          }
          i {
            color: #009fdd;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>