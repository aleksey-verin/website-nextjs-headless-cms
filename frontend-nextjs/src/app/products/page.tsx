import { FC } from 'react'
import Card from '../components/card'

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Products</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card
            title='Product Title'
            subtitle='Category'
            btnLabel='Learn More'
            href='/products/product-1'
          />
          <Card
            title='Product Title'
            subtitle='Category'
            btnLabel='Learn More'
            href='/products/product-2'
          />{' '}
          <Card
            title='Product Title'
            subtitle='Category'
            btnLabel='Learn More'
            href='/products/product-3'
          />{' '}
          <Card
            title='Product Title'
            subtitle='Category'
            btnLabel='Learn More'
            href='/products/product-4'
          />
        </div>
      </section>
    </div>
  )
}

export default Page
