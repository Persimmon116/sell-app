<template>
  <div class="goods">
    <!-- 左侧导航 -->
    <div class="left-nav" id="leftNav">
      <ul>
        <li
          @click="active(item.name)"
          :class="{active:curActive===item.name}"
          v-for="item in goods"
          :key="item.name"
        >
          {{item.name}}
          <span class="num" v-if="item.num>0">{{item.num}}</span>
        </li>
      </ul>
    </div>
    <!-- 右侧内容 -->
    <div class="food-list" id="foodList">
      <div>
        <div :id="item.name" class="item" v-for="item in goods" :key="item.name">
          <!-- 标题 -->
          <h1 class="title">{{item.name}}</h1>
          <div class="item-food">
            <ul>
              <li class="food" @click="foodInfo(food)" v-for="food in item.foods" :key="food.id">
                <img width="80" height="80" :src="food.imgUrl" alt />
                <div>
                  <p class="name">{{food.name}}</p>
                  <p class="desc">{{food.goodsDesc}}</p>
                  <p class="count">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
                  <p class="price">￥{{food.price}}</p>
                </div>
                <!-- 订单加减 -->
                <div class="count1">
                  <i
                    v-if="food.count>0"
                    @click.stop="changeNum(food.name,-1,food.category)"
                    class="iconfont icon-jian"
                  ></i>
                  <span v-if="food.count>0">{{food.count}}</span>
                  <i @click.stop="changeNum(food.name,1,food.category)" class="iconfont icon-jia"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide">
      <!-- 食品详情 -->
      <FoodInfo :food="food" @close="FoodInfoVsible = false" v-show="FoodInfoVsible" />
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import FoodInfo from "@/components/FoodInfo.vue";

// 引入辅助函数
import { mapState } from "vuex";
export default {
  components: {
    FoodInfo,
  },
  data() {
    return {
      // 激活样式
      curActive: "热销榜",
      // 高度数组
      hArr: [],
      // 食品
      food: {},
      // 食品详情显示隐藏
      FoodInfoVsible: false,
    };
  },
  // 方法
  methods: {
    // 激活样式以及联动右边
    active(name) {
      // 激活样式
      this.curActive = name;
      // 右侧联动
      this.righScroll.scrollToElement(document.getElementById(name), 400);
    },
    // 显示食品信息
    foodInfo(food) {
      // 赋值
      this.food = food;
      this.FoodInfoVsible = true;
    },
    // 计算数组
    calcArr() {
      // 初始高度
      let num = 0;
      // 循环数据
      for (let v of this.goods) {
        // console.log(v);
        // 获取高度
        let h = document.getElementById(v.name).offsetHeight;
        // 将数据放入数组
        this.hArr.push({ min: num, max: num + h, name: v.name });
        // 重置高度
        num = num + h;
      }
    },

    // 商品增加减少
    changeNum(name, num, category) {
      this.$store.commit("CHAGE_NUM", { name, num, category });
    },
  },
  // 挂载后
  mounted() {
    // 左侧滚动
    new BScroll("#leftNav", {
      click: true, // 允许点击
      probeType: 3,
    });
    // 右侧滚动
    this.righScroll = new BScroll("#foodList", {
      click: true,
      probeType: 3, //允许派发事件
    });

    // 绑定滚动事件
    this.righScroll.on("scroll", (pos) => {
      // console.log(pos);
      // 获取去移动高度
      let y = Math.abs(pos.y);
      // 循环高度数组
      for (let v of this.hArr) {
        // 判断在哪个区间
        if (y >= v.min && y < v.max) {
          // 区间对应的导航激活
          this.curActive = v.name;
        }
      }
    });
  },
  // 更新后
  updated() {
    this.calcArr();
  },
  created() {
    this.$nextTick(function () {
      this.calcArr();
    });
  },
  computed: {
    ...mapState(["goods"]),
  },
};
</script>

<style lang="less" scoped>
.goods {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  // 左侧导航
  .left-nav {
    flex: 0 0 100px;
    background-color: #eee;
    overflow-y: hidden;

    ul {
      line-height: 1.5;
      box-sizing: border-box;
      li {
        font-size: 14px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 65px;
        border-bottom: 1px solid #fff;
        position: relative;
        .num {
          position: absolute;
          top: 0;
          right: 0;
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
        &.active {
          background-color: #fff;
          border-bottom: 1px solid #f5f6f7;
        }
      }
    }
  }
  // 右侧内容
  .food-list {
    flex: 1;
    overflow: hidden;
    .item {
      .title {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        box-sizing: border-box;
        color: #666;
        border-left: 2px solid orange;
        background-color: #ddd;
        font-size: 14px;
      }
      .item-food {
        .food {
          position: relative;
          margin-bottom: 10px;
          padding: 10px;
          box-sizing: border-box;
          border-bottom: 1px solid #ccc;
          display: flex;
          line-height: 1.5;
          .count1 {
            position: absolute;
            right: 10px;
            bottom: 10px;
            span {
              display: inline-block;
              text-align: center;
              margin: 0 5px;
              line-height: 24px;
            }
            i {
              color: #009fdd;
              font-size: 18px;
            }
          }
          img {
            margin-right: 20px;
          }
          .name {
            font-weight: 700;
            width: 155px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .desc {
            font-size: 12px;
            color: #aaa;
            width: 155px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .count {
            font-size: 12px;
            color: #aaa;
          }
          .price {
            color: red;
          }
        }
      }
    }
  }
  // 进入动画和离开动画的过程
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }

  // 进入动画的瞬间 和 离开动画的瞬间
  .slide-enter,
  .slide-leave-to {
    transform: translateY(100%);
  }
}
</style>