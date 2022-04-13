import { ICategory } from "./category"
import { IPostItem } from "./post"
import { IStrapiListResponse, IStrapiSingleResponse } from "./strapi"

export interface ITag {
  name: string
  slug: string
  category?: IStrapiSingleResponse<ICategory>
  posts?: IStrapiListResponse<IPostItem>
}