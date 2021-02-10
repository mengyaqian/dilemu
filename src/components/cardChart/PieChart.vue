<template>
  <div class="chart-item">
    <div class="check" :id="id"></div>
    <p class="card-title">{{ item.name }}</p>
  </div>
</template>
<script>
import charts from "@/util/charts";
import * as options from "./option";
export default {
  name: "PieChart",
  props: {
    item: Object,
  },
  watch: {
    item: {
      handler(n) {
        this.draw();
      },
      deep: true,
    },
  },
  data() {
    return {
      id: "chart" + Math.random().toString(4).substr(2),
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      charts.createEchart(
        `#${this.id}`,
        "gauge",
        options[this.item.componentName](this.item.name, Number(this.item.value.toFixed(0)))
      );
    },
  },
};
</script>
<style lang="less" scoped>
.chart-item {
  margin-bottom: 10px;
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 162px;
    background: red;
  }
  .card-title {
    color: #333;
    font-size: 12px;
    text-align: center;
    padding-top: 4px;
  }
}
</style>