import { RouteRecordRaw } from 'vue-router'

const files = require.context('.', true, /\.ts$/)
const routers: Array<RouteRecordRaw> = []

files.keys().forEach((key) => {
  const skipModule = ['./index.ts']
  if (skipModule.includes(key)) return
  const defaultRouters = files(key).default
  Array.isArray(defaultRouters) && routers.push(...defaultRouters)
})

export default routers
