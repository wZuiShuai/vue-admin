<template>
  <div class="header">
    <el-icon class="menuIcon" @click="collapse">
      <component :is="isExpand ? 'Fold' : 'Expand'"></component>
    </el-icon>


    <el-breadcrumb separator-icon="ArrowRight">
      <transition-group name="breadcrumb" mode="out-in">
      <el-breadcrumb-item :to="{ name:'home' }" key="/home">
				<div class="breadcrumb-item">
					<el-icon class="breadcrumb-icon">
            <component is="HomeFilled"></component>
					</el-icon>
					<span class="breadcrumb-title">首页</span>
				</div>
			</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="item in matched"
        :key="item.path"
      >
      <div class="breadcrumb-item">
					<el-icon class="breadcrumb-icon" v-if="item.meta.key">
						<component :is="item.meta.key"></component>
					</el-icon>
					<span class="breadcrumb-title">{{ item.meta.title }}</span>
				</div>
      </el-breadcrumb-item>
    </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
//引入pinia
import useStore from "@/store/index";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { windowState } = useStore();
const { isExpand } = storeToRefs(windowState);

const route = useRoute();

const collapse = () => {
  //菜单折叠
  isExpand.value = !isExpand.value;
};

const matched = computed(() =>
  route.matched.filter((item) => item.meta?.title !== '首页'&&item.path !== '/')
);
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
