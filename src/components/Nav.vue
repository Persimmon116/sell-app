<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link to="/goods">商品</router-link>
    </li>
    <li class="nav-item">
      <router-link to="evaluate">评价</router-link>
    </li>
    <li class="nav-item">
      <router-link to="shop">商家</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .nav-item {
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 40px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #000;
      &.router-link-active {
        color: #f00;
      }
    }
  }
}
</style>