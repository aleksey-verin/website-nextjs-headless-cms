import Image from 'next/image'
import { CMSProducts } from '../types'

const Products = async ({params}: {params: {slug: string}}) => {

  const reqUrl = `${process.env.BASE_URL}/products?acf_format=standard&_fields=id,slug,title,acf&slug=${params.slug}`
  const request = await fetch(reqUrl)
  const products = await request.json() as CMSProducts
  const product = products[0]

  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>{product.title.rendered}</h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <Image
              src={product.acf.large_image}
              width='960'
              height='540'
              alt='product'
            />
          </div>
          <div>
            <div className='text-md font-semibold mb-1'>Category</div>
            <div className='text-lg mb-8'>{product.acf.category.name}</div>
            <div className='text-md font-semibold mb-1'>Summary</div>
            <div className='text-lg mb-8'>
            {product.acf.summary}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
