let charts = [],
  timer = null,
  delay = 100;
const { body } = document;
function isInPage(node) {
  return node ? body.contains(node) : false;
}

const resizer = {
  add(arg) {
    const exsits = this.flush().filter(chart => chart === arg);
    if (!exsits.length) {
      charts.push(arg);
    }
    return arg;
  },

  get() {
    return charts;
  },

  // 移除指定 charts 实例
  remove(chart) {
    charts = charts.filter(ins => ins !== chart);
    return charts;
  },

  // 依次遍历执行 chart.resize
  dispatch() {
    //从有图表的页面切换到没有图表的页面,也需要在更新一下charts集合的值
    this.flush().forEach(chart => {
      if (chart && typeof chart.resize === "function") {
        chart.resize();
      }
    });
  },
  //所以需要移除已经不存在于页面中的旧chart引用,更新charts集合
  flush() {
    charts = charts.filter(chart => {
      return isInPage(chart._dom);
    });
    return charts;
  }
};

window.addEventListener(
  "resize",
  function(e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      resizer.dispatch();
    }, delay);
  },
  false
);

export default resizer;
