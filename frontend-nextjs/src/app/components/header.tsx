import { FC } from 'react'
import Navigation from './navigation'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className='container mx-auto p-8 text-center'>
        <Navigation />
        <hr />
      </div>
    </header>
  )
}

export default Header
