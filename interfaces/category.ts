import { IStrapiListResponse } from "./strapi"
import { ITag } from "./tag"

export interface ICategory {
  name: string
  tags?: IStrapiListResponse<ITag>
}