<template>
  <div class="leftCard">
    <div class="cardLeft">
      <span>{{ title }}</span>
      <img src="../images/dataScreen-title.png" alt="" />
    </div>
    <div class="chart">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
.leftCard {
  .cardLeft {
    display: flex;
    flex-direction: column;
    height: 56px;
    span {
      font-size: 18px;
      line-height: 16px;
      color: #ffffff;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    img {
      width: 68px;
      height: 7px;
    }
  }
  .chart {
    width: 100%;
    height: 100%;
    // padding: 40px 65px;
  }
}
</style>
