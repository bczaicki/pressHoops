interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-light',
  secondary: 'bg-secondary text-white hover:bg-secondary-light',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  gold: 'bg-gold text-midnight hover:bg-gold-light',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-block font-semibold rounded-md transition-colors duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
