import { FC } from 'react'
import BlogPost from './blogpost'

const blogPosts = [
  { title: 'Lorem Ipsum Dolor Sit Amet', author: 'John Doe', slug: 'post-1' },
  { title: 'Lorem Ipsum Dolor Sit Amet 2', author: 'Jane Doe', slug: 'post-2' },
]

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='container mx-auto p-8'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Blog</h1>
        <div className='max-w-2xl mx-auto'>
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} title={post.title} author={post.author} slug={post.slug} className='mb-4' />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Page
