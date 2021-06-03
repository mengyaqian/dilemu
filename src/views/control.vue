<template>
  <div class="control-info">
    <!-- 其他控件   -->
    <section class="other-control" style="padding-top: 20px">
      <div class="other-list">
        <div v-for="(item, index) of switchArr" :key="index">
          <component
            :is="item.componentName"
            :item="item"
            @onInput="handleChange"
          ></component>
        </div>
        <div class="add-box add-control" @click="go(1)"></div>
      </div>
    </section>

    <!-- 我的控件 -->
    <section class="other-control">
      <title-bar>我的控件</title-bar>
      <div class="other-list">
        <div v-for="(item, index) of showNunArr" :key="index">
          <PieChart :item="item" />
        </div>
        <div class="add-box add-my-control" @click="go(2)"></div>
      </div>
    </section>
  </div>
</template>

<script>
import titleBar from "@/components/TitleBar";
import PieChart from "@/components/cardChart/PieChart";
import { List, UpdateWidget } from "@/api/setting";
import controlLibrary from "@/util/controlLibrary";

import {
  createSocket,
  oncloseWS,
  onmessageWS
} from "@/util/websocket";

export default {
  name: "control",
  components: {
    titleBar,
    PieChart,
    Control1: (resolve) => require(["@/components/control/Control1"], resolve),
    Control2: (resolve) => require(["@/components/control/Control2"], resolve),
  },
  data() {
    return {
      switchArr: [],
      showNunArr: [],
    };
  },
  watch: {},
  mounted() {
    this.init();
    this.getList();
  },
  destroyed() {
    window.removeEventListener("onmessageWS", this.handleWebsocket);
    oncloseWS(); //离开路由之后断开websocket连
  },
  methods: {
    async getList() {
      const res = await List();
      if (res) {
        const { switchArr, showNunArr } = res.data;
        //去除switch错误数据（即没有该数据对应的组件）
        switchArr &&
          switchArr.forEach((element, idx) => {
            const index = controlLibrary[0].findIndex(
              (item) => item.componentName === element.componentName
            );
            if (index < 0) {
              switchArr.splice(idx, 1);
            }
          });
        //去除仪表盘错误数据（即没有该数据对应的配置项）
        showNunArr &&
          showNunArr.forEach((element, idx) => {
            const index = controlLibrary[1].findIndex(
              (item) => item.componentName === element.componentName
            );
            if (index < 0) {
              showNunArr.splice(idx, 1);
            }
          });
        this.switchArr = switchArr;
        this.showNunArr = showNunArr;
      }
    },
    handleChange(v, item) {
      this.$dialog
        .confirm({
          title: "提醒",
          message: "是否切换开关？",
        })
        .then(() => {
          item.switchState = v;
          this.changeWidget(item);
        });
    },
    async changeWidget(item) {
      const res = await UpdateWidget({ widget: item });
      if (res) {
        this.$toast.success("更新成功");
      }
    },
    go(wType) {
      //1 窗帘方面 2数据图表方面
      this.$router.push({
        path: "/setting",
        query: {
          wType,
        },
      });
    },
    init() {
      createSocket("/echo");
      window.addEventListener("onmessageWS", this.handleWebsocket);
    },
    handleWebsocket(msg) {
      console.log(msg);
      const data = msg.detail.data.data ? JSON.parse(msg.detail.data.data) : {};

      const { wNumber, value } = data.data;

      // console.log(wNumber,value)
      try {
        this.switchArr.forEach((item) => {
          if (item.wNumber == wNumber) {
            item.switchState =
              typeof value === "boolean" ? value : item.switchState;
            new Error("StopIteration");
          }
        });
      } catch (error) {}
      try {
        this.showNunArr.forEach((item,index) => {
          if (item.wNumber == wNumber) {
            let v = typeof value === "number" ? value : item.value;
            this.$set(this.showNunArr[index],'value',v)
            new Error("StopIteration");
          }
        });
      } catch (error) {}
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
  .other-control {
    .add-box {
      background-color: #eee;
      border-radius: 4px;
      background-image: url(../assets/images/add.png);
      background-size: 32px 32px;
      background-position: center;
      background-repeat: no-repeat;
    }
    .add-control {
      width: 162px;
      height: 100px;
      margin-bottom: 26px;
    }
    .add-my-control {
      width: 162px;
      height: 162px;
      margin-bottom: 26px;
    }
    .other-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>
