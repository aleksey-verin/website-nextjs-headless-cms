import Link from 'next/link'

const Button = ({
  href,
  type,
  className,
  children,
}: {
  href?: string
  type: 'button' | 'submit' | 'reset' | undefined
  className?: string
  children?: React.ReactNode
}) => {
  const styles = `py-2 px-5 text-white rounded font-semibold bg-teal-800 hover:bg-teal-700 transition-colors ${
    className || ''
  }`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  )
}

export default Button
