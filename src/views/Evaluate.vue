<template>
  <div class="evaluate">
    <div class="top">
      <div class="left">
        <span class="score">{{shop.score}}</span>
        <span class="closeScore">综合评分</span>
        <span class="high">高于周围商家69.2%</span>
      </div>
      <div class="right">
        <p>
          <span>服务态度</span>
          <van-rate
            class="stars"
            readonly
            v-model="shop.score"
            allow-half
            :size="15"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
          <span class="score">{{shop.score}}</span>
        </p>
        <p>
          <span>商品味道</span>
          <van-rate
            class="stars"
            readonly
            v-model="shop.score"
            allow-half
            :size="15"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
          <span class="score">{{shop.score}}</span>
        </p>
        <p class="deliveryTime">
          <span>送达时间</span>
          {{shop.deliveryTime}}分钟
        </p>
      </div>
    </div>
    <div class="middle">
      <div class="btn">
        <van-button
          color="#00a0dc"
          size="small"
          v-if="ratings.length"
          :class="{active: selectType===2}"
          @click="setSelectType(2)"
        >全部 {{rating.length}}</van-button>
        <van-button
          color="#00a0dc"
          size="small"
          :class="{active: selectType===0}"
          @click="setSelectType(0)"
        >满意 {{satisfied}}</van-button>
        <van-button
          color="#00a0dc"
          size="small"
          :class="{active: selectType===1}"
          @click="setSelectType(1)"
        >不满意 {{dissatisfaction}}</van-button>
      </div>
      <p>
        <van-checkbox v-model="onlyShowText" @change="isContent">只看有内容的评价</van-checkbox>
      </p>
    </div>
    <div class="bottom">
      <div class="item" v-for="(v,i) in ratings" :key="i">
        <img class="avatar" :src="v.avatar" alt />
        <div class="info">
          <p class="title-date">
            <span>{{v.username}}</span>
            <span class="date">{{v.rateTime}}</span>
          </p>
          <p>
            <van-rate
              class="stars"
              style="margin:0 10px 10px 0"
              readonly
              v-model="v.score"
              allow-half
              :size="10"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <span class="time">{{v.deliveryTime}}分钟送达</span>
          </p>
          <p class="text">{{v.text}}</p>
          <p class="fabulous">
            <i class="iconfont icon-dianzan-copy"></i>
            <span class="text-con" v-for="v in v.recommend" :key="v">{{v}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Rate, Button, Checkbox, CheckboxGroup } from "vant";
import moment from "moment";
Vue.use(Rate);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
import { getRatings } from "@/api";
export default {
  props: ["shop"],
  data() {
    return {
      onlyShowText: false, // 是否只显示有文本的
      selectType: 2, // 选择的评价类型: 0满意, 1不满意, 2全部
      // 数据
      ratings: [],
      // 数据备份
      rating: [],
      // 满意
      satisfied: 0,
      // 不满意
      dissatisfaction: 0
    };
  },
  methods: {
    // 获取
    async getRatings() {
      // 发送请求
      let { data } = await getRatings();

      // this.ratings.rateType = data.filter(v => {
      //   v.rateType === 1;
      // });

      // 处理时间
      data.forEach(v => {
        v.rateTime = moment(v.rateTime).format("YYYY-MM-DD HH:mm:ss");
      });
      // 赋值渲染
      this.ratings = data;
      // 数据备份
      this.rating = data;

      // 过滤满意和不满意
      this.rating.forEach(v => {
        // 如果v.rateType == 0 表示满意
        if (v.rateType == 0) {
          this.satisfied++;
          // 否则表示不满意
        } else {
          this.dissatisfaction++;
        }
      });
    },
    // 评论激活样式 过滤评论
    setSelectType(selectType) {
      this.selectType = selectType;
      // 重新赋值
      this.ratings = this.rating;
      // 定义数组保存
      let arr = [];
      // 遍历数据
      this.ratings.forEach(v => {
        // 如果v.rateType == selectType
        if (v.rateType == selectType) {
          // 往数组添加数据
          arr.push(v);
        }
        // 调用过滤文本
        this.isContent();
        // 赋值渲染
        this.ratings = arr;
      });
      // 如果selectType === 2
      if (selectType === 2) {
        // 数据等于备份数据
        this.ratings = this.rating;
        // 调用过滤文本
        this.isContent();
      }
    },
    // 过滤空文本
    isContent() {
      // 如果this.onlyShowText === true
      if (this.onlyShowText === true) {
        // 定义数组保存数据
        let arr = [];
        // 遍历数据
        this.ratings.forEach(v => {
          // 如果评论内容不为空
          if (v.text !== "") {
            // 往数组添加数据
            arr.push(v);
          }
        });
        // 赋值渲染
        this.ratings = arr;
        // 否则
      } else {
        // 数据等于备份数据
        this.ratings = this.rating;
      }
    }
  },
  // 加载后
  created() {
    // 调用获取数据函数
    this.getRatings();
  }
};
</script>

<style lang="less" scoped>
.evaluate {
  background-color: #f1f2f3;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  .top {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    flex: 0 0 120px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .left {
      flex: 0 0 130px;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #ccc;
      line-height: 30px;
      text-align: center;
      .score {
        color: rgb(255, 210, 30);
        font-size: 20px;
      }
      .closeScore {
        font-weight: 700;
      }
      .high {
        color: #ccc;
        font-size: 12px;
      }
    }
    .right {
      flex: 1;
      padding: 0 20px;
      box-sizing: border-box;
      line-height: 30px;
      p {
        font-weight: 700;
        display: flex;
        span {
          display: inline-block;
          flex: 0 0 70px;
        }
        .stars {
          align-self: center;
          margin-right: 10px;
        }
        .score {
          color: rgb(250, 201, 6);
        }
      }
      .deliveryTime {
        color: #ccc;
        font-size: 14px;
        span {
          color: #333;
          font-size: 16px;
        }
      }
    }
  }
  .middle {
    background-color: #fff;
    border-top: 1px solid #ccc;
    flex: 0 0 110px;
    padding: 20px 20px 0;
    box-sizing: border-box;
    .btn {
      padding: 0 0 10px 0;
      box-sizing: border-box;
      border-bottom: solid 1px #ccc;
      margin-bottom: 10px;
      button {
        margin-right: 10px;
        width: 75px;
        height: 35px;
        color: #000 !important;
        &.active {
          color: #fff !important;
        }
      }
    }
  }
  .bottom {
    background-color: #fff;
    border-top: 1px solid #ccc;

    .item {
      padding: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #f5f6f7;
      display: flex;
      img {
        flex: 0 0 50px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .time {
          color: #ccc;
        }
        .title-date {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .date {
            font-size: 14px;
            margin-right: 10px;
          }
        }
        .text {
          margin-bottom: 5px;
          line-height: 24px;
          width: 300px;
          flex: 1;
          box-sizing: border-box;
          overflow: hidden;
          white-space: pre-wrap;
        }
        .fabulous {
          height: 30px;
          display: flex;
          overflow: hidden;
          white-space: pre-wrap;
          width: 290px;
          i {
            align-self: center;
          }
          span {
            align-self: center;
            margin-left: 5px;
            display: inline-block;
            width: 60px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border: 1px solid #ccc;
            font-size: 0.6rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>