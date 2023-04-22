<template>
  <div class="blog-item-container">
    <div class="cover">
      <img :src="baseImgUrl + props.cover" v-if="props.cover">
      <img src="@/assets/default.jpg" v-else>
    </div>
    <div class="content">
      <div class="title">{{props.title}}</div>
      <div class="summary ellipsis">
        {{props.summary}}
      </div>
      <div class="info">
        <span>时间：{{props.creatTime}}</span>
        <span>作者：地瓜</span>
        <span><el-icon><View /></el-icon>
       阅读量： {{props.views}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { baseImgUrl } from '@/api/request.js'
import { defineProps } from 'vue'
const props = defineProps({
  cover: {
    type: String
  },
  title: {
    type: String
  },
  summary: {
    type: String
  },
  creatTime: {
    type: String
  },
  views: {
    type: Number
  }
})
</script>

<style lang="scss" scoped>
@import '@/common/sass/mixin.scss';
.blog-item-container {
  display: flex;
  margin-bottom: 10px;
  padding:10px 0;
  background: #fff;
  .cover {
    width: 130px;
    height: 130px;
    margin: 0 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:#ccc;
    .title {
      color: $title_green;
      font-size: 20px;
      font-weight: 700;
    }
    .summary {
      color:#999;
    }
    .info {
      span {
        color:#999;
        margin-right: 8px;

      }

    }
  }
}

</style>
