export interface IStrapiDataResponse<T = object> {
  id: number
  attributes: T
}
interface IStrapiPaginationResponse {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
interface IStrapiMetaResponse {
  pagination: IStrapiPaginationResponse
}

export interface IStrapiListResponse<T = object> {
  data: IStrapiDataResponse<T>[]
  meta: IStrapiMetaResponse
}

export interface IStrapiSingleResponse<T = object> {
  data: IStrapiDataResponse<T>
  meta: IStrapiMetaResponse
}