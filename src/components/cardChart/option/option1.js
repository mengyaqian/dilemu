import echarts from "echarts";
export default function option1(title, value) {
  var fontColor = "rgba(255,255,255,0.7)";
  let noramlSize = 14;
  let center = ["50%", "58%"];
  let nqradius, kdradius;
  nqradius = "73%";
  kdradius = "78%";

  let nqColor = [
    [
      value / 100,
      new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: "rgba(248,182,45,1)",
        },
        {
          offset: 0.5,
          color: "rgba(125,103,179,1)",
        },
        {
          offset: 1,
          color: "rgba(33,109,195,1)",
        },
      ]),
    ],
    [1, "#2C3638"],
  ];

  let option = {
    backgroundColor: "#000",
    title: {
      show: true,
      x: "center",
      bottom: "4%",
      text: title,
      textStyle: {
        fontWeight: "500",
        fontSize: 12,
        color: fontColor,
      },
    },
    tooltip: {
      show: false,
    },
    series: [
      {
        name: "刻度文字",
        type: "gauge",
        radius: kdradius,
        center: center,
        startAngle: 180,
        endAngle: 0,
        z: 7,
        splitNumber: 5,
        min: 0,
        max: 100,
        axisTick: {
          show: true,
          lineStyle: {
            color: "#0af",
            width: 1,
          },
          length: 4,
          splitNumber: 6,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 8,
            opacity: 0,
          },
        },
        axisLabel: {
          distance: -44,
          fontSize: 12,
          color: fontColor,
        },
        /*              pointer: {
                show: false
            },
            detail: {
                show: false
            }*/
        pointer: {
          show: true,
          width: 3,
          length: 40,
        },
        itemStyle: {
          normal: {
            //color: "#0af",//wqColor
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgba(248,182,45,1)",
              },
              {
                offset: 0.5,
                color: "rgba(125,103,179,1)",
              },
              {
                offset: 1,
                color: "rgba(33,109,195,1)",
              },
            ]),
          },
        },
        detail: {
          show: true,
          offsetCenter: [0, "40%"], //显示数值的位置
          rich: {
            value: {
              fontSize: 14,
              lineHeight: 10,
              color: "#1e87f0",
              fontWeight: "500",
            },
            company: {
              fontSize: 12,
              lineHeight: 20,
              color: "#1e87f0",
            },
          },
        },
        data: [value],
      },
      {
        name: "内层盘",
        type: "gauge",
        z: 6,
        radius: nqradius,
        startAngle: 180,
        endAngle: 0,
        center: center,
        axisLine: {
          lineStyle: {
            color: nqColor,
            width: 8,
            opacity: 0.9,
          },
        },
        splitNumber: 5,
        splitLine: {
          length: 8,
          lineStyle: {
            color: fontColor,
            width: 1,
          },
        },
        min: 0,
        max: 100,
        axisTick: {
          show: false,
        },

        axisLabel: {
          show: false,
        },
        pointer: {
          show: false,
        },

        detail: {
          show: 0,
        },
      },
    ],
  };
  return option;
}
