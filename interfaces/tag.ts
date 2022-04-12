import { ICategory } from "./category"
import { IStrapiListResponse, IStrapiSingleResponse } from "./strapi"

export interface ITag {
  name: string
  category?: IStrapiSingleResponse<ICategory>
  posts?: IStrapiListResponse<ITag>
}