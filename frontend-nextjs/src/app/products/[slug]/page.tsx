import Image from 'next/image'
import { FC } from 'react'

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <div className='container mx-auto p-8 pb-16'>
      <section>
        <h1 className='text-4xl bold text-center font-bold mb-8'>Individual product</h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <Image
              src='https://source.unsplash.com/random'
              width='960'
              height='540'
              alt='product'
            />
          </div>
          <div>
            <div className='text-md font-semibold mb-1'>Category</div>
            <div className='text-lg mb-8'>Electronics</div>
            <div className='text-md font-semibold mb-1'>Summary</div>
            <div className='text-lg mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima quia, numquam
              corrupti, unde sed dignissimos ipsam reprehenderit voluptates aperiam, placeat odio.
              Ipsam esse fugit et facere sequi eius accusantium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vel facilis possimus sequi, quam, tenetur molestiae
              voluptas facere, aspernatur odit temporibus fugit. Doloremque blanditiis, minus vero
              vitae in, dignissimos mollitia cupiditate maxime dolorum repellat reprehenderit, ipsam.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
