export type CMSBlogDetails = CMSBlogContent[]

export interface CMSBlogContent {
  id: number
  slug: string
  title: Title
  content: Content
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}
