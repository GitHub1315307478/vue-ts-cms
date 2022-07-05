import axios from 'axios'

const instanceOne = axios.create()
instanceOne.defaults.baseURL = 'http://httpbin.org'
axios.defaults.baseURL = 'http://httpbin.org'
instanceOne.defaults.params = { a: 1, b: 2 }
instanceOne.defaults.data = { key: '3' }
instanceOne({
  method: 'post',
  url: '/post',
  data: {
    pageNum: 1,
    pageSize: 10
  },
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

axios
  .all([
    axios.get('/get', { params: { pageNum: 1, pageSize: 10 } }),
    axios.post('/post', { pageNum: 1, pageSize: 10 })
  ])
  .then(
    axios.spread((res1, res2) => {
      console.log(res1.data, res2.data)
    })
  )
