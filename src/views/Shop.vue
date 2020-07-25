<template>
  <div class="shop">
    <div class="shopInfo">
      <div class="top">
        <div>
          <p class="title">{{shop.name}}</p>
          <p class="order-score">
            <van-rate
              class="stars"
              style="margin:0 10px 10px 0"
              readonly
              v-model="shop.score"
              allow-half
              :size="20"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <span>(661)</span>
            <span>月售690单</span>
          </p>
          <p></p>
        </div>
        <div class="collection">
          <i @click="chageColor" :class="{active:v == false}" class="iconfont icon-shoucang"></i>
          <span v-if="v==true">未收藏</span>
          <span v-else>已收藏</span>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <p class="title">起送价</p>
          <p class="content">
            <span>{{shop.minPrice}}</span>
            <span>元</span>
          </p>
        </div>
        <div class="center">
          <p class="title">商家配送</p>
          <p class="content">
            <span>{{shop.deliveryPrice}}</span>
            <span>元</span>
          </p>
        </div>
        <div class="right">
          <p class="title">平均配送时间</p>
          <p class="content">
            <span>{{shop.deliveryTime}}</span>
            <span>分钟</span>
          </p>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="title">
        <h1>公告与活动</h1>
        <p>{{shop.bulletin}}</p>
      </div>
      <div class="item">
        <p v-for="(item,i) in shop.supports" :key="i">
          <!-- <span>减</span> -->
          <span>{{item}}</span>
        </p>
      </div>
    </div>
    <div class="shopImg">
      <h1 class="title">商家实景</h1>
      <div class="img" id="img">
        <div>
          <img
            @click="show(img)"
            width="100"
            height="80"
            v-for="img in shop.pics"
            :key="img"
            :src="img"
            alt
          />
        </div>
      </div>
    </div>
    <div class="shopCon">
      <h1 class="title">商家信息</h1>
      <p>该商家支持开发票，请在下单时写好发票抬头</p>
      <p>品类:汉堡薯条, 炸鸡炸串</p>
      <p>地址:四川省成都高新区府城大道西段399号6栋1层</p>
      <p>营业时间:8:30-21:00</p>
    </div>

    <!-- 模态框 -->
    <div @click="visibel=false" v-show="visibel" class="model">
      <img width="100%" height="300px" :src="imgUrl" alt />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: ["shop"],
  data() {
    return {
      // 收藏显示隐藏
      v: false,
      // 模态框显示隐藏
      visibel: false,
      // 图片地址
      imgUrl: "",
    };
  },
  methods: {
    // 显示隐藏爱心
    chageColor() {
      this.v = !this.v;
    },
    // 图片回填
    show(img) {
      // 显示隐藏模态框
      this.visibel = !this.visibel;
      // 赋值渲染
      this.imgUrl = img;
    },
  },
  mounted() {
    new BScroll("#img", {
      click: true, // 允许点击
      probeType: 3,
      scrollX: true,
    });
  },
};
</script>

<style lang="less" scoped>
.shop {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f5f6f7;
  .shopInfo {
    height: 190px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    .top {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      padding: 0 0 20px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      .collection {
        display: flex;
        flex-direction: column;
        flex: 0 0 80px;
        i {
          font-size: 30px;
          margin-bottom: 5px;
          align-self: center;
          color: #ccc;
          &.active {
            color: red;
          }
        }
        span {
          align-self: center;
          font-weight: 400;
          font-size: 14px;
        }
      }
      .title {
        margin-bottom: 10px;
      }
      .order-score {
        display: flex;
        font-size: 14px;
        .stars {
          margin-bottom: 0 !important;
        }
        span {
          font-weight: 500;
          align-self: center;
          margin-right: 10px;
        }
      }
    }
    .bottom {
      padding: 10px;
      box-sizing: border-box;
      height: 80px;
      display: flex;
      justify-content: space-between;
      > div {
        flex: 0 0 90px;
        text-align: center;
        .title {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 10px;
        }
        .content {
          span:first-child {
            font-size: 28px;
            margin-right: 5px;
          }
        }
      }
      .left {
        border-right: 1px solid #ccc;
        padding-right: 25px;
        box-sizing: border-box;
      }
      .center {
        border-right: 1px solid #ccc;
        padding-right: 25px;
        box-sizing: border-box;
      }
    }
  }
  .activity {
    background-color: #fff;
    border-top: 1px solid #ccc;
    padding: 20px 20px 0;
    box-sizing: border-box;
    margin-bottom: 20px;
    .title {
      margin-bottom: 20px;
      h1 {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 20px;
      }
      p {
        margin-left: 10px;
        color: red;
        line-height: 30px;
      }
    }
    .item {
      p {
        height: 60px;
        line-height: 60px;
        border-top: 1px solid #ccc;
      }
    }
  }
  .shopImg {
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: solid 1px #ccc;
    margin-bottom: 20px;
    .title {
      font-weight: 600;
      margin-bottom: 20px;
    }
    .img {
      display: flex;
      height: 100px;
      > div {
        display: flex;

        img {
          margin-right: 10px;
        }
      }
    }
  }
  .shopCon {
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: solid 1px #ccc;
    .title {
      font-weight: 600;
      margin-bottom: 20px;
    }
    p {
      height: 60px;
      line-height: 60px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-top: 1px solid #ccc;
    }
  }
  .model {
    z-index: 111111;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    img {
      position: absolute;
      top: 50%;
      margin-top: -150px;
    }
  }
}
</style>