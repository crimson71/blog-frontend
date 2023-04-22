<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-top></header-top>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

import HeaderTop from '@/components/HeaderTop.vue'
</script>

<style>
.el-header {
  padding:0
}

</style>
