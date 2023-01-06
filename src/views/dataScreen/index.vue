<template>
  <div class="dataScreenContainer">
    <div class="dataScreen" ref="dataScreenRef">
      <div class="dataScreenHeader">
        <div class="headerLeft">
          <span class="headerLBtn">首页</span>
        </div>
        <div class="headerCenter">
          <div class="headerCTitle">
            <span>智慧旅游可视化大数据展示平台</span>
            <div class="headerCWarning">平台高峰预警信息（2条）</div>
          </div>
        </div>
        <div class="headerRigth">
          <span class="headerRBtn">统计报告</span>
        </div>
      </div>

      <div class="dataScreenMain">
        <div class="dateScreenMainLeft">
          <LeftCard title="实时游客统计" class="leftTop">
            <template #content>
              <RealTimeAccessChart ref="RealTimeAccessRef" />
            </template>
          </LeftCard>
          <LeftCard title="男女比例" class="leftCenter">
            <template #content>
              <MaleFemaleRatioChart ref="MaleFemaleRatioRef" />
            </template>
          </LeftCard>
          <LeftCard title="年龄比例" class="leftBottom">
            <template #content>
              <AgeRatioChart ref="AgeRatioRef"></AgeRatioChart>
            </template>
          </LeftCard>
        </div>

        <div class="dateScreenMainCenter">
          <div class="centerTop">
            <div class="title">景区实时客流量</div>
            <MapChar ref="MapRef"></MapChar>
          </div>
          <LeftCard title="未来30天游客量趋势图" class="centerBottom">
            <template #content>
              <OverNext30Chart ref="OverNext30Ref"></OverNext30Chart>
            </template>
          </LeftCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftCard from "./components/leftCard.vue"
import RealTimeAccessChart from "./components/realTimeAccessChart.vue"
import MaleFemaleRatioChart from "./components/maleFemaleRatioChart.vue"
import AgeRatioChart from "./components/AgeRatioChart.vue"
import MapChar from "./components/MapChar.vue"
import OverNext30Chart from "./components/OverNext30Chart.vue"
import { onMounted, ref } from "vue"
import { ECharts } from "echarts"

const dataScreenRef = ref<HTMLElement | null>(null)

onMounted(() => {
  dataScreenRef.value!.style.transform = `scale(${getScale()}) translate(-50%, -50%)`

  initCharts()
})

const getScale = (width = 1920, heigth = 1080): number => {
  let windowWidth = window.innerWidth / width
  let windowHeigth = window.innerHeight / heigth
  return windowWidth < windowHeigth ? windowWidth : windowHeigth
}

interface ChartProps {
  [key: string]: ECharts | null
}

interface ChartExpose {
  initChart: (params: any) => ECharts
}

const dataScreen: ChartProps = {
  chaart1: null,
  chaart2: null,
  chaart3: null,
  chaart4: null,
}

const ageData = [
  {
    value: 200,
    name: "10岁以下",
    percentage: "16%",
  },
  {
    value: 110,
    name: "10 - 18岁",
    percentage: "8%",
  },
  {
    value: 150,
    name: "18 - 30岁",
    percentage: "12%",
  },
  {
    value: 310,
    name: "30 - 40岁",
    percentage: "24%",
  },
  {
    value: 250,
    name: "40 - 60岁",
    percentage: "20%",
  },
  {
    value: 260,
    name: "60岁以上",
    percentage: "20%",
  },
]

const mapData = [
  {
    fromName: "北京",
    toName: "上海",
    coords: [
      [116.4551, 40.2539],
      [121.4648, 31.2891],
    ],
  },
  {
    fromName: "上海",
    toName: "北京",
    coords: [
      [121.4648, 31.2891],
      [116.4551, 40.2539],
    ],
  },
  // {
  //   fromName: "北京",
  //   toName: "广州",
  //   coords: [
  //     [116.4551, 40.2539],
  //     [113.5107, 23.2196],
  //   ],
  // },
  // {
  //   fromName: "广州",
  //   toName: "北京",
  //   coords: [
  //     [113.5107, 23.2196],
  //     [116.4551, 40.2539],
  //   ],
  // },
  // {
  //   fromName: "北京",
  //   toName: "成都",
  //   coords: [
  //     [116.4551, 40.2539],
  //     [103.9526, 30.7617],
  //   ],
  // },
  // {
  //   fromName: "成都",
  //   toName: "北京",
  //   coords: [
  //     [103.9526, 30.7617],
  //     [116.4551, 40.2539],
  //   ],
  // },
  // {
  //   fromName: "成都",
  //   toName: "新疆维吾尔自治区",
  //   coords: [
  //     [103.9526, 30.7617],
  //     [85.294711, 41.371801],
  //   ],
  // },
  // {
  //   fromName: " 新疆维吾尔自治区",
  //   toName: "成都",
  //   coords: [
  //     [85.294711, 41.371801],
  //     [103.9526, 30.7617],
  //   ],
  // },
]

const RealTimeAccessRef = ref<ChartExpose>()
const MaleFemaleRatioRef = ref<ChartExpose>()
const AgeRatioRef = ref<ChartExpose>()
const MapRef = ref<ChartExpose>()
const OverNext30Ref = ref<ChartExpose>()

const initCharts = (): void => {
  dataScreen.chart1 = RealTimeAccessRef.value?.initChart(0.5) as ECharts
  dataScreen.chaart2 = MaleFemaleRatioRef.value?.initChart({
    man: 0.6,
    woman: 0.4,
  }) as ECharts
  dataScreen.chart3 = AgeRatioRef.value?.initChart(ageData) as ECharts
  dataScreen.chaart4 = MapRef.value?.initChart(mapData) as ECharts
  OverNext30Ref.value?.initChart({
    unit: ["访问量"],
    data: new Array(30).fill("").map((val) => {
      val = [1, 3, 8, 9]
      return val
    }),
  }) as ECharts
}
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
