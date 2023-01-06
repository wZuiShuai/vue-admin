<template>
  <el-container>
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <section>
          <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" appear mode="out-in">
              <component :is="Component" :key="route.path"></component>
            </transition>
          </router-view>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    width: auto;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}
.fade-transform-enter-from {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(30px);
}
</style>
