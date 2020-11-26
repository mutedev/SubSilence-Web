import type { ShortRoutes } from '../interface'
import json from '../json/short.json'

interface ShortRoutesObj {
  prefix: string
  routes: ShortRoutes[]
}

const shortRoutesObj: ShortRoutesObj = json

export default shortRoutesObj
