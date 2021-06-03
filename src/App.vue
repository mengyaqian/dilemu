<template>
  <div id="app">
    <Back
      v-if="routerInfo.isShow"
      :title="routerInfo.title"
    />
    <router-view />
  </div>
</template>

<script>
import Back from "@/components/Back.vue";
export default {
  name: "app",
  components: { Back },
  data() {
    //////////abc
    return {
      //sdsss
      balcklist: ["/login", "/control"],
    };
  },
  computed: {
    routerInfo: function () {
      const route = this.$route;
      return {
        isShow: this.balcklist.indexOf(route.path) < 0 ? true : false,
        title: route.meta.title,
      };
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #fff;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
}
p {
  padding: 0;
  margin: 0;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
