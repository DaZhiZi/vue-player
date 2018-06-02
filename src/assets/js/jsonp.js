import originJsonp from 'jsonp'
// jsonp 方法
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 拼接 url 字符串
export function param(data) {
  let url = ''
  for (var k in data) {
    // console.log('param k', k)
    let value = data[k] !== undefined ? data[k] : ''
    // encodeURIComponent 是对 URI 进行编码的 JS 自带函数
    // url 是拼成这种格式： &format=jsonp
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // url 拼好后是这样： &g_tk=1928093487&inCharset=utf-8&outChars...
  // 去掉头的 &
  return url ? url.substring(1) : ''
}
