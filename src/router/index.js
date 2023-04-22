import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/articles',
    name: 'home',
    component: () => import('@/views/FrontendHomePage.vue'),
    children: [
      {
        path: '/visitcount',
        component: () => import('@/views/VisitCount.vue'),
        name: 'visitcount',
        meta: { title: '访问统计' }
      },
      {
        path: '/articles',
        component: () => import('@/views/ArticlesPage.vue'),
        name: 'articles',
        meta: { title: '文章' }
      },
      {
        path: '/comments',
        component: () => import('@/views/CommentsPage.vue'),
        name: 'comments',
        meta: { title: '留言' }
      },
      {
        path: '/about',
        component: () => import('@/views/AboutPage.vue'),
        name: 'about',
        meta: { title: '关于' }
      }

    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
