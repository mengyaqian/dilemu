export const colors = [ "#FED07E", "#FEA300", "#8B6031", "#DBB176", "#BA874F" ];
export const defOptionOfLine = {
  color: colors,
  toolbox: {
    top: 0,
    right: "5%",
    feature: {
      saveAsImage: { show: false },
      dataView : { show : false },
    }
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    left: 20,
    top: 10,
    symbol: "roundRect",
    padding: 0,
    itemGap: 30
  },
  xAxis: {},
  yAxis: {
    type: "value"
  },
  series: []
};

export const seriesOptOfPie = {
  name: "",
  type: "pie",
  minAngle: 20,
  center: ["50%", "40%"],
  radius: ["30%", "50%"],
  hoverOffset: 20,
  itemStyle: {
    //饼形图白色间距
    normal: {
      borderWidth: 2,
      borderColor: "white",
      // borderColor: "#360",
      borderType: "solid"
    },
    emphasis: {
      borderWidth: 0,
      shadowBlur: 50,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowColor: "rgba(0,0, 0, 0.15)"
    }
  },
  label: {
    normal: {
      //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
      formatter: "{big|{d}}{pre|%}",
      position: "inside",
      textBorderColor: "transparent",
      shadowColor: "#999",
      rich: {
        big: {
          fontSize: 16,
          color: "white",
          fontWeight: "bold",
          // backgroundColor: "#350",
          padding: [0, 0, 5, 15]
        },
        pre: {
          fontSize: 12,
          color: "white"
        }
      }
    }
  }
  // data: [
  //   { value: 335, name: "直达",selected:true },
  //   { value: 2000, name: "谷歌" },
  //   { value: 45, name: "其他" }
  // ]
};
// 饼状图
export const defOptionOfPie = {
  color: ['#BA874F','#ECD8B6'],
  title: {
    text: "",
    left: "40%",
    top: "5%",
    textStyle: {
      color: "#494949"
    }
  },
  tooltip: {
    trigger: "item",
    //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  toolbox: {
    top: 0,
    right: "5%",
    feature: {
      saveAsImage: { show: false },
      dataView : { show : false },
    }
  },
  legend: {
    orient: "vertical",
    bottom: "2%"
    // data: ["直达", "谷歌", "其他"]
  },
  series: [],
};

//  柱图配置
export const defOptionOfBar = {
  color: colors,
  toolbox: {
    top: 0,
    right: "5%",
    feature: { 
      saveAsImage: { show: false },
    } 
  },
  tooltip: {
    trigger: 'item',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  legend: {
    left: 20,
    top: 10,
    symbol: "roundRect",
    padding: 0,
    itemGap: 30
  },
  xAxis: {
    splitLine : {
      show : false
    }
  },
  yAxis: {
    splitLine : {
      show : false
    },
    type: "value"
  },
  series: []
};

// 柱图 Series 配置
export const seriesOfBar = {
  legendHoverLink : true,
  data : [],
  type : 'bar',
  barMaxWidth : 50,
  barMinHeight : 10
};

//没有数据时的echart配置项
export const defOptionOfEmpty = {
  title: {
    show: true,
    textStyle: {
      color: "#494949",
      fontSize: 16,
      fontWeight: 400
    },
    text: "暂无数据",
    left: "center",
    top: "center"
  },
  toolbox: {
    feature: {
      saveAsImage: { show: false }
    }
  },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: []
};

export default {
  line: defOptionOfLine,
  pie: defOptionOfPie,
  bar : defOptionOfBar,
  empty: defOptionOfEmpty,
};
