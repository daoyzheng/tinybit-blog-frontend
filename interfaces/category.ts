import { IStrapiListResponse } from "./strapi"
import { ITag } from "./tag"

export interface ICategory {
  name: string
  slug: string
  tags?: IStrapiListResponse<ITag>
}