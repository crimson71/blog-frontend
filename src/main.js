import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/element/index.scss'
import 'element-plus/dist/index.css'
import '@/common/sass/comm.scss'
import BlogItem from '@/components/BlogItem.vue'
import 'tailwindcss/tailwind.css'

createApp(App)
  .use(store)
  .use(router)
  .component('BlogItem', BlogItem)
  .mount('#app')
