// 定义通用key名
const INFO_KEY = 'hm_shopping_info'
// 通过通用key名获取数据，解析成对象，没有获取到数据设置默认值defaultObj
export const getInfo = () => {
  // 数据默认值
  const defaultObj = {
    token: '',
    userId: ''
  }
  // TODO:getItem()通过对应的Key名获取数据并进行解析
  const result = localStorage.getItem(INFO_KEY)
  // TODO:JSON.parse()将获取到的json字符串转换成对象
  // TODO:判断是否有数据没有就使用默认数据
  return result ? JSON.parse(result) : defaultObj
}
export const setInfo = (obj) => {
  // TODO:存进数据并命名key,转换成字符串
  return localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
export const removeInfo = () => {
  // remove
  localStorage.removeItem(INFO_KEY)
}
