import axios, { AxiosResponse } from "axios"
import { IStrapiListResponse } from "../interfaces/strapi"

type AllowableTypes = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'PATCH' | 'patch' | 'delete' | 'DELETE'
interface IRequest {
  url: string
  method: AllowableTypes
  params?: Record<string, string>
  body?: object
  headers?: Record<string, string>
}
const baseUrl = process.env.BASE_URL
const request = async <T>({ url, method, params, body, headers } : IRequest) : Promise<AxiosResponse<T>> => {
  headers = headers || {}
  headers = Object.assign(headers, {
    // Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  })
  const response = await axios(`${baseUrl}/${url}`, {
    method,
    ...(body && { body }),
    headers: headers,
    params: params
  })
  return response
}

export const getList = async <T>(url: string, params?: Record<string, string>) : Promise<IStrapiListResponse<T>> => {
  params = params || {}
  if (url.includes('posts')) params['populate'] = 'category,tags'
  const method = 'get'
  const res = await request<IStrapiListResponse<T>>({ url, method })
  return res.data
}
