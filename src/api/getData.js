import request from '@/api/request.js'

// 登陆

export const reqLogin = (paramas) => {
  return request({
    method: 'post',
    url: 'admin/login',
    data: paramas

  })
}

// 获取文章列表
export const reqArticleList = () => {
  return request({
    method: 'get',
    url: 'admin/article'
  })
}

// 上传图片
export const reqUploadImg = (paramas) => {
  return request({
    url: 'admin/article/img-load',
    method: 'post',
    data: paramas

  })
}
// 新增文章
export const reqAddArticle = (paramas) => {
  return request({
    method: 'post',
    url: 'admin/aritcile/article-add',
    data: paramas
  })
}

// 获取文章详情
export const reqArticleDetail = (paramas) => {
  // console.log(paramas)
  return request({
    method: 'get',
    url: `admin/article/article-view/ ${paramas}`

  })
}

// 修改文章
export const reqArticleUpdate = (paramas) => {
  return request({
    method: 'post',
    url: 'admin/article/article-update',
    data: paramas
  })
}

// 筛选文章
export const reqSelectArticle = (paramas) => {
  return request({
    url: `admin/article/article-select/${paramas}`,
    method: 'get'
  })
}
// 获取分类列表
export const reqClssifyList = () => {
  return request({
    method: 'get',
    url: 'admin/classify'
  })
}

// 新增分类
export const reqAddClassify = (params) => {
  return request({
    url: 'admin/clssify/classify-add',
    method: 'post',
    data: params
  })
}
// 修改分类
export const reqUpdateClassify = (paramas) => {
  return request({
    method: 'post',
    url: 'admin/clssify/classify-update',
    data: paramas
  })
}
// 获取博客概况数据
export const reqBlogData = () => {
  return request({
    method: 'get',
    url: 'home/blog-data'
  })
}
