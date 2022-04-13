import { IPostItem } from "./post"
import { IStrapiListResponse } from "./strapi"
import { ITag } from "./tag"

export interface ICategory {
  name: string
  slug: string
  posts?: IStrapiListResponse<IPostItem>
  tags?: IStrapiListResponse<ITag>
}