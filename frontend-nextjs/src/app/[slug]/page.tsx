import { FC } from 'react'
import { CMSPages } from './types'

const Page = async ({params}: {params: {slug: string}}) => {

  const reqUrl = `${process.env.BASE_URL}/pages?_fields=id,slug,title,content&slug=${params.slug}`
  const request = await fetch(reqUrl)
  const pages = await request.json() as CMSPages
  const page = pages[0]

  if(!page) return null

  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>{page.title.rendered}</h1>
        <div className='prose prose-slate mx-auto max-w-2xl' dangerouslySetInnerHTML={{__html: page.content.rendered}}>
        </div>
      </section>
    </div>
  )
}

export default Page
