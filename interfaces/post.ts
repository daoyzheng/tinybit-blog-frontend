import { IStrapiListResponse, IStrapiSingleResponse } from './strapi'
import { ICategory } from './category'
import { ITag } from './tag'

export interface IPostItem {
  title: string
  content: string
  publishedAt: string
  slug: string
  category: IStrapiSingleResponse<ICategory>
  tags: IStrapiListResponse<ITag>
}