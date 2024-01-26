import Link from 'next/link'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = ({ required, type, name, id, className }: InputProps) => {
  const styles = `border rounded border-slate-300 outline-0 py-2 px-3 hover:border-slate-900 focus:border-slate-900 ${
    className || ''
  }`

  return <input required={required} name={name} id={id} type={type} className={styles} />
}

export default Input
