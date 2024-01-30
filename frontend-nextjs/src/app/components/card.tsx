import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Button from './button'

interface CardProps {
  title: string
  subtitle: string
  btnLabel: string
  href: string
  thumbnail: string
}

const Card: FC<CardProps> = ({ title, subtitle, btnLabel, href, thumbnail  }) => {
  return (
    <div className='text-center'>
      <Link href={href}>
        <Image
          className='block mx-auto mb-q'
          width='600'
          height='400'
          src={thumbnail}
          // src={'https://source.unsplash.com/random'}
          alt='card thumbnail image'
        />
      </Link>
      <div className='font-semibold text-center text-xl mb-1'>{title}</div>
      <div className='text-md text-center mb-4'>{subtitle}</div>
      <Button href={href}>{btnLabel}</Button>
    </div>
  )
}

export default Card
