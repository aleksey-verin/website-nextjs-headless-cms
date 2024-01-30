export type CMSPosts = CMSPost[]

export interface CMSPost {
  id: number
  slug: string
  title: Title
}

export interface Title {
  rendered: string
}
