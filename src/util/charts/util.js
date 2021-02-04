import defaultOpts from "./settings";
import resizer from "./resizer";
import echarts from "echarts";
/*
 *el 渲染容器
 *type 图标类型
 *echartsOpt 自定义属性
 *notMerge 是否merge 基础属性
 */
export const createEchart = (
  el,
  type = "line",
  echartsOpt = {},
  notMerge = false
) => {
  let option;
  const dom = typeof el === "string" ? document.querySelector(el) : el;
  if (!dom) {
    return;
  }
  const myChart = echarts.init(dom);

  const defOpt = defaultOpts[type] ? deepCopy(defaultOpts[type]) : {};
  option = Object.assign({}, defOpt, echartsOpt);
  // console.log(option, '合并后参数')
  //清空当前实例，会移除实例中所有的组件和图表。
  myChart.clear();
  myChart.showLoading({
    text: "数据加载中",
    color: "#1890ff",
  });
  myChart.setOption(option, notMerge);
  // 绑定 window resize 事件
  resizer.add(myChart);
  myChart.hideLoading();
  return myChart;
};
//没有数据，填充0;有数据直接返回数据
export function mapByKey(list = [], key = "") {
  list = list.map((item) => {
    return item ? (key ? item[key] : item) : 0;
  });
  return list;
}

export const deepCopy = (obj, cache) => {
  if (cache === void 0) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function(c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy,
  });

  keys(obj).forEach(function(key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};

export const find = (list, f) => {
  return list.filter(f)[0];
};
