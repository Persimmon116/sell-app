<template>
  <div class="app">
    <!-- 头部 -->
    <Header :shop="shop" />
    <!-- 导航 -->
    <Nav />
    <!-- 主体 -->
    <Main :shop="shop" />
    <!-- 购物车 -->
    <ShopCar :shop="shop" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import ShopCar from "@/components/ShopCar.vue";
import { getShop, getGoods } from "@/api";
export default {
  components: {
    Header,
    Nav,
    Main,
    ShopCar
  },
  data() {
    return {
      shop: {}
    };
  },
  async created() {
    let { goodsList } = await getGoods();

    // 给每一个食品 都添加一个数量字段
    for (let v of goodsList) {
      for (let food of v.foods) {
        food.count = 0;
      }
    }
    this.$store.commit("SET_GOODS", goodsList);
    // console.log(this.goods);
    let { data } = await getShop();
    this.shop = data;
  }
};
</script>

<style lang="less" scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>