<template>
  <div class="control-info info">
    <title-bar>控件库</title-bar>
    <section>
      <div class="my-card-list">
        <div
          class="card"
          :style="{height:wType ==  1 ?'100px':'162px'}"
          v-for="(item, index) of controlLibrary"
          :key="index"
          @click="goSetting(item.iconName,item.componentName)"
        >
          <img :src="getImgUrl(item.iconName)" width="100%" height="100%" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import titleBar from "@/components/TitleBar";
import controlLibrary from "@/util/controlLibrary";

export default {
  name: "control",
  components: {
    titleBar,
  },
  data() {
    return {
      controlLibrary: [],
      wType: 0,
    };
  },
  watch: {},
  mounted() {
    const { wType } = this.$route.query;
    if (!wType) {
      this.$dialog
        .alert({
          message: "缺省参数",
        })
        .then(() => {
          this.$router.replace("/control");
        });
    } else {
      this.wType = wType;
      this.controlLibrary = controlLibrary[Number(wType)-1]
    }
  },
  methods: {
    getImgUrl(img) {
      return require("@/assets/images/echart/" + img);
    },
    goSetting(iconName,componentName) {
      this.$router.push({
        path: "/setting",
        query: {
          iconName,
          wType:this.wType,
          componentName,
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.control-info {
  padding: 0px 20px;
  section {
    margin-bottom: 35px;
  }
  .my-card-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .card {
      width: 162px;
      height: 162px;
      background-color: #061226;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 10px;
    }
  }
}
</style>
