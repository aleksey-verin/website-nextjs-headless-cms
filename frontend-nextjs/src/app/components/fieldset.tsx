import { FC, PropsWithChildren } from 'react'

interface FieldsetProps extends PropsWithChildren {
  
}

const Fieldset: FC<FieldsetProps> = ({children}) => {
  return <>{children}</>
}

export default Fieldset