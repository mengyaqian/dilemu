<template>
  <div class="back">
    {{ title }}<span class="hotspot" @click="$router.go(-1)"></span>
  </div>
</template>
<script>
export default {
  name: "Back",
  props: {
    title: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.back {
  background-color: #1c90ff;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/images/back.png);
  background-size: 10px 18px;
  background-repeat: no-repeat;
  background-position: 10px center;
  position: relative;
  .hotspot {
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 16px;
    height: 40px;
    display: block;
    z-index: 2;
  }
}
</style>