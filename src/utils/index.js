// 时间格式化
export const formatDate = (date) => {
  const dateStr = new Date(date)
  const y = dateStr.getFullYear()
  let m = dateStr.getMonth() + 1
  let d = dateStr.getDate()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  return `${y}-${m}-${d}`
}
