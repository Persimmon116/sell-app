<template>
  <div class="main">
    <router-view :goods="goods" :shop="shop"></router-view>
  </div>
</template>

<script>
export default {
  props: ["goods", "shop"]
};
</script>

<style lang="less" scoped>
.main {
  flex: 1;
  overflow-y: scroll;
  width: 100%;
}
</style>