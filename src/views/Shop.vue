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
          <i class="iconfont icon-shoucang-copy"></i>
          <span>未收藏</span>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <p class="title">起送价</p>
          <p class="content">
            <span>20</span>
            <span>元</span>
          </p>
        </div>
        <div class="center">
          <p class="title">商家配送</p>
          <p class="content">
            <span>4</span>
            <span>元</span>
          </p>
        </div>
        <div class="right">
          <p class="title">平均配送时间</p>
          <p class="content">
            <span>40</span>
            <span>分钟</span>
          </p>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="title">
        <h1>公告与活动</h1>
        <p>阿萨德放假啊爱神的箭法拉第按房间辣卡萨丁打扫房间来看阿萨德飞机拉可适当阿斯顿房间里</p>
      </div>
      <div class="item">
        <p>
          <span>减</span>
          <span>的说法所发生的</span>
        </p>
        <p>
          <span>折</span>
          <span>的说法所发生的</span>
        </p>

        <p>
          <span>折</span>
          <span>的说法所发生的</span>
        </p>
        <p>
          <span>折</span>
          <span>的说法所发生的</span>
        </p>
      </div>
    </div>
    <div class="shopImg">
      <h1 class="title">商家实景</h1>
      <div class="img">
        <img width="130px" height="80px" src alt />
        <img width="130px" height="80px" src alt />
        <img width="130px" height="80px" src alt />
      </div>
    </div>
    <div class="shopCon">
      <h1 class="title">商家信息</h1>
      <p>大法师登陆接口阿斯蒂芬了</p>
      <p>大法师登陆接口阿斯蒂芬了</p>
      <p>大法师登陆接口阿斯蒂芬了</p>
      <p>大法师登陆接口阿斯蒂芬了</p>
      <p>大法师登陆接口阿斯蒂芬了</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["shop"]
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
      img {
        border: 1px solid #000;
        margin-right: 10px;
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
      border-top: 1px solid #ccc;
    }
  }
}
</style>