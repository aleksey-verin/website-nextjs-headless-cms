import Link from 'next/link'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Textarea = ({ required, name, id, className }: TextareaProps) => {
  const styles = `border text-black rounded border-slate-300 outline-0 py-2 px-3 hover:border-slate-900 focus:border-slate-900 ${
    className || ''
  }`

  return <textarea required={required} name={name} id={id} className={styles} />
}

export default Textarea
