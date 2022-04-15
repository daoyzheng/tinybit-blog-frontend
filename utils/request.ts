import axios, { AxiosResponse } from "axios"
import { IStrapiListResponse, IStrapiSingleResponse } from "../interfaces/strapi"
import qs from 'qs'
import { IUpdateUpvotePayload, IUpvote } from "../interfaces/upvote"

type AllowableTypes = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'PATCH' | 'patch' | 'delete' | 'DELETE'
interface IRequest {
  url: string
  method: AllowableTypes
  params?: Record<string, object>
  body?: object
  headers?: Record<string, string>
}
const baseUrl = process.env.BASE_URL
const request = async <T>({ url, method, params, body, headers } : IRequest) : Promise<AxiosResponse<T>> => {
  params = params || {}
  if (method === 'get' && url?.includes('post')) params = { ...params, populate: ['category', 'tags', 'upvote']}
  const queryString = qs.stringify(params)

  headers = headers || {}
  headers = Object.assign(headers, {
    // Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  })

  const response = await axios(`${baseUrl}/${url}${queryString ? `?${queryString}` : ''}`, {
    method,
    ...(body && { data: body }),
    headers: headers,
  })

  return response
}

export const getList = async <T>(url: string, params?: Record<string, object>): Promise<IStrapiListResponse<T>> => {
  const method = 'get'
  const res = await request<IStrapiListResponse<T>>({ url, method, params })
  return res.data
}

export const get = async <T>(url: string, params?: Record<string, object>): Promise<IStrapiSingleResponse<T>> => {
  const method = 'get'
  const res = await request<IStrapiSingleResponse<T>>({ url, params, method })
  return res.data
}

export const updateUpvote = async <IUpvote>(url: string, payload: IUpdateUpvotePayload): Promise<IStrapiSingleResponse<IUpvote>> => {
  const method = 'put'
  const res = await request<IStrapiSingleResponse<IUpvote>>({ url, method, body: payload })
  return res.data
}
