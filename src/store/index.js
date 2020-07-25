import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'vant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 商品数据
    goods: [],
    // 总数量
    sum: 0,
    // 总价
    total: 0,
    sumNum: 0

  },
  mutations: {
    // 把商品数据放入仓库
    SET_GOODS(state, paylod) {

      state.goods = paylod
    },
    // 计算商品数量
    CHAGE_NUM(state, paylod) {
      // 计算总数量
      state.sum += paylod.num
      // 循环商品列表
      for (let v of state.goods) {
        // 如果商品名字和传入的名字一致
        if (v.name === paylod.category) {
          // 计算左侧导航数字
          v.num += paylod.num
        }
        // 循环食品列表
        for (let food of v.foods) {
          // 如果食品的名字等于传进来的名字
          if (food.name == paylod.name) {
            // 计算数量
            food.count += paylod.num
          }
        }
      }
    },
    // 清空总数量
    CLEAR(state) {
      state.sum = 0
    },

  },
  getters: {
    // 购物车数据
    shopList(state) {
      // 定义数组保存数据
      let arr = [];
      for (let v of state.goods) {
        for (let food of v.foods) {
          if (food.count > 0) {
            arr.push(food);
          }
        }
      }
      let array = []
      let obj = {}
      for (let v of arr) {
        if (!obj[v.name]) {
          obj[v.name] = '111'
          array.push(v)
        }
      }
      return array
    },

  },
  actions: {
  },



})
