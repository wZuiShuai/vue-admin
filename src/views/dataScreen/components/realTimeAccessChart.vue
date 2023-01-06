<template>
  <div class="actualTotal">
    <div class="expectTotal">可预约总量<i>999999</i>人</div>
    <div class="totalLists">
      <div
        class="list"
        v-for="(item, index) in actualTotal.split('')"
        :key="index"
      >
        {{ item }}
      </div>
      <div class="list" key="people">人</div>
    </div>
  </div>
  <div class="echarts" id="RealTimeAccessChart"></div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import { ECharts, init } from "echarts"
import "echarts-liquidfill"

const actualTotal: Ref<string> = ref("123456")

const initChart = (data: number = 1): ECharts => {
  const charEle = document.getElementById("RealTimeAccessChart") as HTMLElement
  const charEch: ECharts = init(charEle)
  const option = {
    title: [
      {
        text: (data * 100).toFixed(0) + "%",
        left: "49%",
        top: "35%",
        textAlign: "center",
        textStyle: {
          fontSize: "14",
          fontWeight: "normal",
          color: "#ffffff",
          align: "center",
          textBorderColor: "rgba(0, 0, 0, 0)",
          textShadowColor: "#000",
          textShadowBlur: 0,
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
        },
      },
      {
        text: "预约量",
        left: "49%",
        top: "25%",
        textAlign: "center",
        textStyle: {
          fontSize: "15",
          fontWeight: "normal",
          color: "#ffffff",
          align: "center",
          textBorderColor: "rgba(0, 0, 0, 0)",
          textShadowColor: "#000",
          textShadowBlur: 0,
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
        },
      },
    ],
    grid: {
      top: "0",
      left: "0px",
      right: "0px",
      bottom: "0",
      containLabel: true,
    },
    polar: {
      radius: ["75%", "85%"],
      center: ["50%", "50%"],
    },
    angleAxis: {
      max: 120,
      clockwise: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      startAngle: 188,
    },
    radiusAxis: {
      type: "category",
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        type: "liquidFill",
        radius: "70%",
        z: 2,
        center: ["50%", "50%"],
        data: [0.4, 0.4, 0.4], // data个数代表波浪数
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#35FAB6", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(40, 209, 247,0.3)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 2,
            borderColor: "#31d8d5",
            shadowBlur: 20,
            shadowColor: "#50c1a7",
          },
        },
        label: {
          show: false,
        },
        backgroundStyle: {
          borderWidth: 1,
          // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#0D2648", // 0% 处的颜色
              },
              {
                offset: 0.8,
                color: "#0D2648", // 100% 处的颜色
              },
              {
                offset: 1,
                color: "#228E7D", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      {
        type: "pie",
        radius: ["80%", "80%"],
        center: ["50%", "50%"],
        z: 1,
        label: {
          show: false,
        },
        silent: true,
        itemStyle: {
          borderWidth: 2,
          borderType: [8, 10],
          borderDashOffset: 15,
          borderColor: "#31d8d5",
          color: "#11144e",
          borderCap: "round",
        },
        data: [100],
      },
      {
        type: "bar",
        data: [55],
        z: 10,
        coordinateSystem: "polar",
        roundCap: true,
        color: "#31d8d5",
      },
    ],
  }
  charEch.setOption(option)
  return charEch
}

defineExpose({
  initChart,
})
</script>

<style scoped lang="scss">
.echarts {
  padding-top: 50px;
  width: 100%;
  height: calc(100% - 50px);
}
.actualTotal {
  height: 50px;
  margin-top: -50px;
  padding-right: 6px;

  .expectTotal {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: #ffffff;
    font-size: 14px;
    i {
      font-style: normal;
      font-style: oblique;
      color: #ff8100;
    }
  }
  .totalLists {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 32px;
    color: #66ffff;
    height: 50px;
    margin-top: 10px;
    margin-right: 4px;
    .list {
      width: 52px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-right: 1px;
      background: url("../images/total.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
