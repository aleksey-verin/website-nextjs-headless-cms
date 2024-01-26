import { FC } from 'react'

interface BlogPostDetailsProps {}

const BlogPostDetails: FC<BlogPostDetailsProps> = ({}) => {
  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Lorem ipsum dolor sit amet.</h1>
        <div className='prose prose-slate mx-auto max-w-2xl'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, laboriosam asperiores
            deleniti voluptas adipisci quaerat beatae sint assumenda iusto facere?
          </p>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem cumque
            facere numquam officia eum?
          </p>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat illo laborum repellat
            aperiam suscipit, dolore iure? Dolores porro quis inventore nulla natus magnam, totam
            consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis saepe modi eligendi.
            Tenetur placeat molestiae maiores corrupti rem dolores? Sint reiciendis dolorem neque
            fuga. Vel eligendi officiis cum alias maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, exercitationem. Rem
            assumenda est, totam quibusdam magnam sint! Nulla, error vel?
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogPostDetails
