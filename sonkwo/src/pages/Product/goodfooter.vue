<template>
  <div class="good">
    <div class="goods-footer">
      <div class="goods-item g-i-l" @click="gotoCart">购物车</div>
      <div class="goods-item g-i-l">收藏</div>
      <div class="goods-item g-i-b" style="background: #ff9800;">加入购物车</div>
      <div class="goods-item g-i-b" style="background: #ff5722;">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoCart() {
      this.$router.push({ name: "Cart" });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.good {
  height: 2.574371rem;
  width: 100%;
}
.goods-footer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-top: 0.0625rem solid #cccccc;
  /* justify-content: center; */
}
.goods-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.g-i-l {
  flex: 1;
  font-size: 0.549199rem;
  color: #666;
  border-left: 0.0625rem solid #cccccc;
}
.g-i-b {
  flex: 2;
  font-size: 0.800915rem;
  color: #fff;
}
</style>

