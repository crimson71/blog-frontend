<template>
  <div class="article-container">
    <el-container>
      <el-main>
        <div class="article" v-if="articleList.length">
          <router-link to="#" v-for="(item, index) in articleList" :key="index">
            <blog-item
              :cover="item.cover"
              :title="item.title"
              :summary="item.content"
              :views="item.readed_count"
              :creatTime="item.create_time"
            />
          </router-link>
        </div>
        <p v-else class="text-center">分类下没有文章</p>
      </el-main>
      <el-aside width="300px">
        <div class="profile-box">
          <div class="profile-top">
            <div class="avatar">
              <img src="@/assets/avatar.jpg" alt="" />
            </div>
          </div>
          <div class="profile-bottom">
            <p class="blog-name">地瓜的小博客</p>
            <div class="my-github">
              <a href="https://github.com/crimson71">我的源码</a>
            </div>
            <div class="total-data">
              <div class="data-item">
                <div class="data">
                  {{ blogTotalData.totalBlogs }}
                </div>
                <div class="data-name">博客数</div>
              </div>
              <div class="data-item">
                <div class="data">
                  {{ blogTotalData.commentsCount }}
                </div>
                <div class="data-name">评论数</div>
              </div>
              <div class="data-item">
                <div class="data">
                  {{ blogTotalData.totalClass }}
                </div>
                <div class="data-name">分类数</div>
              </div>
            </div>
          </div>
        </div>
        <div class="classify-box">
          <div class="title">
            <span>专栏.分类</span>
            <span>点击专栏名筛选</span>
          </div>
          <div class="classify-items">
            <el-button
              size="large"
              color="#45b97c"
              type="primary"
              plain
              v-for="item in classifyList"
              :key="item.class_id"
              @click="selectArticle(item.class_id)"
              >{{ item.name }}</el-button
            >
            <el-button color="#45b97c"
              type="primary" plain @click="initArticleList()">查看全部</el-button>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import {
  reqArticleList,
  reqClssifyList,
  reqSelectArticle,
  reqBlogData
} from '@/api/getData.js'
import { onMounted, ref } from 'vue'
import { formatDate } from '@/utils/index.js'
const articleList = ref([])
const classifyList = ref([])
const blogTotalData = ref({})

// 初始化博客列表
const initArticleList = async () => {
  const { data } = await reqArticleList()
  for (let i = 0; i < data.length; i++) {
    data[i].create_time = formatDate(data[i].create_time)
  }
  articleList.value = data
}
const initClassifyList = async () => {
  const { data } = await reqClssifyList()
  classifyList.value = data
}
// 筛选博客
const selectArticle = async (id) => {
  const { data } = await reqSelectArticle(id)
  for (let i = 0; i < data.length; i++) {
    data[i].create_time = formatDate(data[i].create_time)
  }
  articleList.value = data
}
// 获取博客概况
const getBlogData = async () => {
  const { data } = await reqBlogData()
  data.forEach(item => {
    const key = Object.keys(item)
    blogTotalData.value[key] = item[key]
  })
}
onMounted(() => {
  initArticleList()
  initClassifyList()
  getBlogData()
})
</script>

<style lang="scss" scoped>
@import '@/common/sass/mixin.scss';
.article-container {
  width: 80%;
  margin: auto;
  .el-main {
    padding: 0;
    margin-right: 10px;
  }
  .profile-box {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
    .profile-top {
      position: relative;
      width: 100%;
      height: 150px;
      background: url('@/assets/profile-bg.jpg') no-repeat center;
      background-size: 100%;
      .avatar {
        position: absolute;
        bottom: -42px;
        left: 80px;

        img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
        }
      }
    }
    .profile-bottom {

      width: 100%;
      height: 240px;
      padding: 50px 10px 0 10px;

      .blog-name {
        height: 40px;
        text-align: center;
        margin: auto;
        font-size: 15px;
      }
      .my-github {

        width: 120px;
        height: 50px;
        background: green;
        border-radius: 5px;
        margin: auto;
        text-align: center;
        line-height: 50px;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .total-data {
        padding-top: 20px;
        display:flex;
        justify-content:space-between;
        .data-item {
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          text-align: center;
          font-size: 18px;
        }
      }
    }
  }
  .classify-box {
    background: #fff;
    .title {
      height: 50px;
      border-bottom: 1px solid $title_green;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      span {
        @include font(15px, 50px);
        color: $title_green;
      }
    }
    .classify-items {
      padding: 10px 10px;
      flex-wrap: wrap;
      .el-button {
        margin: 0 10px 10px 0;
        font-size: 18px;
        padding: 12px;
      }
    }
  }
}
</style>
