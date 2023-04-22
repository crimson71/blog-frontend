<template>
  <el-menu
   :default-active="activeIndex"
   class="el-menu-demo"
   mode="horizontal"
   :ellipsis="false"
 >
   <el-menu-item >地瓜的博客</el-menu-item>
   <div class="flex-grow" />
   <el-menu-item :index="index" v-for="(item,index) in menu" :key="index">
    <router-link :to="item.path">
      {{item.title}}
    </router-link>
    </el-menu-item>

   <el-menu-item >
    <a href="#">开放式后台</a>
  </el-menu-item>
 </el-menu>
</template>

<script setup>
// import { useRouter } from 'vue-router'
import { ref } from 'vue'

// const router = useRouter()
const activeIndex = ref('0')
const menu = ref([

  {
    title: '文章',
    path: '/articles'
  },
  {
    title: '留言',
    path: '/comments'
  },
  {
    title: '关于',
    path: '/about'
  },
  {
    title: '访问统计',
    path: '/visitcount'
  }
])

</script>

<style>
a {
  text-decoration: none;
}
.flex-grow {
 flex-grow: 1;
}
</style>
