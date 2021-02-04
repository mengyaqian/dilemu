import echarts from "echarts";
export default function option2(title, value) {
  const option = {
    backgroundColor: "#000",
    series: (function() {
      var result = [];
      const pdata = [{name:title,value:value}];
      pdata.forEach(function(item) {
        result.push(
          {
            name: "背景圈",
            type: "gauge",
            radius: "85%",
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "RGBa(49, 68, 118,1)",
                      },
                      {
                        offset: 1,
                        color: "rgba(49, 68, 118,1)",
                      },
                    ]),
                  ],
                ],
                width: 5,
              },
            },
            splitLine: {
              //分隔线样式
              show: false,
            },
            axisLabel: {
              //刻度标签
              show: false,
            },
            pointer: {
              show: false,
            },
            axisTick: {
              //刻度样式
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, "94%"],
              textStyle: {
                fontSize: 12,
                color: "rgba(0,255,255,1)",
              },
              formatter: function() {
                return title;
              },
            },
          },
          {
            name: "刻度",
            type: "gauge",
            radius: "50%",
            min: 0,
            max: 100,
            splitNumber: 4, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, "rgba(0,0,0,0)"]],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "rgba(255,255,255,0.8)",
            //   color: "aqua",
              distance: 10,
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 6, //刻度的段落数
            //   length:2,
              lineStyle: {
                color: "#fff",
                width: 1,
              },
              length: -5,
            }, //刻度样式
            splitLine: {
              show: true,
              length: -8,
              lineStyle: {
                color: "#fff",
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
          // 最外层含中间数据
          {
            name: item.name,
            type: "gauge",
            radius: "85%",
            startAngle: 220,
            endAngle: -45,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 5,
                color: [
                  [
                    item.value / 100,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(34,132,206,1)",
                      },
                      {
                        offset: 1,
                        color: "rgba(0,255,255,1)",
                      },
                    ]),
                  ],
                  [1, "rgba(255,255,255,.0)"],
                ],
              },
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, "0%"],
              formatter: function(params) {
                return item.value + "%";
              },
              textStyle: {
                fontSize: 14,
                color: "rgba(0,255,255,1)",
              },
            },
            itemStyle: {
               color: "rgba(255, 36, 74,.3)",
            },
            data: [
              {
                value: item.value,
              },
            ],
          }
        );
      });

      return result;
    })(),
  };
  return option;
}
