import { FC } from 'react'
import BlogPost from './blogpost'
import { CMSPosts } from './types'

const blogPosts = [
  { title: 'Lorem Ipsum Dolor Sit Amet', author: 'John Doe', slug: 'post-1' },
  { title: 'Lorem Ipsum Dolor Sit Amet 2', author: 'Jane Doe', slug: 'post-2' },
]

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {

  const reqUrl = `${process.env.BASE_URL}/posts?_fields=id,slug,title`
  const request = await fetch(reqUrl)
  const posts = await request.json() as CMSPosts

  return (
    <div className='container mx-auto p-8'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Blog</h1>
        <div className='max-w-2xl mx-auto'>
          {posts.map((post) => (
            <BlogPost key={post.slug} title={post.title.rendered} author={post.title.rendered} slug={post.slug} className='mb-4' />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Page
