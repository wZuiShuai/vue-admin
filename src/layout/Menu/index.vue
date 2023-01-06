<template>
  <div class="menu" :style="{ width: isExpand ? '220px' : '65px' }">
    <div class="logo f-center">
      <img src="@/assets/vue.svg" alt="logo" />
      <span v-show="isExpand">Admin</span>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="menu[0].path"
        :router="true"
        :collapse="!isExpand"
        background-color="#191a20"
        text-color="#bdbdc0"
        active-text-color="#fff"
        :unique-opened="true"
        :collapse-transition="false"
      >
        <template v-for="item in menu" :key="item.path">
          <!-- 嵌套类型 -->
          <el-sub-menu
            :index="item.path"
            v-if="item.children && item.children.length > 0"
          >
            <template #title>
              <el-icon>
                <component :is="item.key"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item :index="list.path"  v-for="list in item.children" :key="list.path">
            <el-icon>
              <component :is="list.key"></component>
            </el-icon>
            <span>{{ list.title }}</span>
          </el-menu-item>
          </el-sub-menu>
          <!-- 单个类型 -->
          <el-menu-item :index="item.path" v-else>
            <el-icon>
              <component :is="item.key"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import menu from "@/router/menu";
//引入pinia
import useStore from "@/store/index";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { windowState } = useStore();
const { isExpand } = storeToRefs(windowState);

onMounted(()=>{
  window.onresize = () => {
			let screenWidth = document.body.clientWidth;
			if (isExpand.value === true && screenWidth < 1200) windowState.setCollapse();
			if (isExpand.value === false && screenWidth > 1200) windowState.setCollapse();
	};
})
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
