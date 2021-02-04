<template>
  <div class="setting-info">
    <div class="bg-top">
      <div class="add-circle" @click="goLibrary">
        <van-image
          v-if="iconName"
          width="100%"
          height="100%"
          fit="cover"
          :src="require('../assets/images/echart/' + iconName + '')"
        />
      </div>
    </div>
    <section class="set-box">
      <van-cell-group>
        <van-field v-model="controlName" placeholder="输入控件名称" />
        <van-field
          readonly
          clickable
          :value="controlNumber"
          placeholder="选择控件编码"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell-group>
      <van-button
        type="primary"
        round
        size="large"
        @click="save"
        class="btn-sure"
        >确定</van-button
      >
    </section>
  </div>
</template>

<script>
import titleBar from "@/components/TitleBar";
import { AddWidget } from "@/api/setting";

export default {
  name: "control",
  components: {
    titleBar,
  },
  data() {
    return {
      iconName: "",
      wType: 0,
      controlName: "",
      controlNumber: "",
      componentName: "",
      showPicker: false,
      columns: [],
    };
  },
  watch: {},
  mounted() {
    const { iconName, wType, componentName } = this.$route.query;
    if (!wType) {
      this.$dialog
        .alert({
          message: "缺省参数",
        })
        .then(() => {
          this.$router.replace("/control");
        });
    } else {
      this.iconName = iconName;
      this.wType = wType;
      this.componentName = componentName;
      this.getColumns();
    }
  },
  methods: {
    getColumns() {
      const arr = [];
      for (let i = 1; i <= 20; i++) {
        arr.push(i);
      }
      this.columns = arr;
    },
    onConfirm(value) {
      this.controlNumber = value;
      this.showPicker = false;
    },
    goLibrary() {
      this.$router.push({
        path: "/library",
        query: {
          wType: this.wType,
        },
      });
    },
    async save() {
      const {
        iconName,
        controlName,
        controlNumber,
        wType,
        componentName,
      } = this;
      console.log({ iconName, controlName, controlNumber });
      const pdata = {
        widget: {
          name: controlName,
          wNumber: controlNumber,
          wType: wType,
          componentName, //选择的控件样式
        },
      };
      const res = await AddWidget(pdata);
      if (res) {
        this.$toast.success("保存成功");
        this.$router.push("/control");
      }
    },
  },
};
</script>

<style scoped lang="less">
.setting-info {
  // padding: 0px 20px;
  position: relative;
  .bg-top {
    height: 160px;
    background-image: url(../assets/images/setting-bg.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    .add-circle {
      width: 164px;
      height: 164px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      bottom: -82px;
      left: 50%;
      margin-left: -82px;
      background-image: url(../assets/images/circle.png);
      background-size: 100%;
      background-repeat: no-repeat;
      background-repeat: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .set-box {
    padding: 100px 20px 0;
  }
  section {
    .btn-sure {
      width: 279px;
      height: 46px;
      margin-top: 23px;
      background: #1279dc;
    }
    text-align: center;
  }
}
</style>
