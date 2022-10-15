<template>
    <div>
{{state.token}}----{{state.getUserMsg}}
    </div>
</template>

<script setup lang="ts">
import {userStore} from '@/store/user'
const state = userStore()
</script>

<style scoped>

</style>