export default function option3(title, value) {
  const option = {
    backgroundColor: "#000",
    title: {
      show: true,
      x: "center",
      bottom: "4%",
      text: title,
      textStyle: {
        fontWeight: "500",
        fontSize: 12,
        color: '#31F3FF',
      },
    },
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },

    series: [
      {
        name: "外部线",
        type: "gauge",
        radius: "85%", // 动态
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          lineStyle: {
            color: [
              [1, "#31F3FF"], // 动态
            ],
            width: 1,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          //标题
          show: false,
        },
      },
      {
        name: "外部刻度",
        type: "gauge",
        radius: "85%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 10, //刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: false,
          lineStyle: {
            color: [[1, "rgba(0,0,0,0)"]],
          },
        }, //仪表盘轴线
        axisLabel: {
          show: true,
            color: "#31F3FF",

          fontSize: 10, // 动态
          distance: -27, // 动态
        }, //刻度标签。
        axisTick: {
          show: false,
        }, //刻度样式
        splitLine: {
          show: false,
        },
      },
      {
        name: "内部宽线条",
        type: "gauge",
        radius: "50%",
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          lineStyle: {
            color: [[1, "#122B3C"]],
            width: 3,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          show: false,
        },
      },
      {
        name: "内部细线条",
        type: "gauge",
        radius: "60%",
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          lineStyle: {
            color: [[1, "#122B3C"]],
            width: 3,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          show: false,
        },
      },
      {
        name: "间隔条形",
        type: "gauge",
        radius: "62.5%",
        z: 4,
        splitNumber: 35,
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          lineStyle: {
            opacity: 0,
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: true,
          length: 5,
          splitNumber: 1,
          lineStyle: {
            color: "#122B3C",
            width: 1,
          },
        },
        splitLine: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          show: false,
        },
      },
      {
        name: "数据",
        type: "gauge",
        radius: "62.5%",
        z: 3,
        startAngle: 225,
        max: 100,
        endAngle: -45,
        axisLine: {
          lineStyle: {
            color: [
              [value / 100, "#31F3FF"], // 动态
              [1, "#185363"],
            ],
            width: 5,
          },
        },
        tooltip: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        detail: {
          show: true,
          fontWeight: "bold",
          fontSize: 14,
        },
        pointer: {
          show: true,
          width: 3,
          length:'70%'
        },
        data: [
          {
            name: "",
            value: value,
          },
        ],
      },
      // 内圆
      {
        name: "内圆环",
        type: "pie",
        radius: ["2%", "1%"],
        hoverAnimation: false,
        tooltip: {
          show: false,
        },
        cursor: "default",
        labelLine: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          color: "#122B3C",
        },
        animation: false,
        data: [1],
      },
      // 内圆
      {
        name: "内圆环2",
        type: "pie",
        radius: 5,
        hoverAnimation: false,
        cursor: "default",
        tooltip: {
          show: false,
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          color: "#31F3FF",
        },
        animation: false,
        data: [1],
      },
    ],
  };
  return option;
}
