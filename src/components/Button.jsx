"use client"

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-slate-600 text-slate-300 hover:bg-slate-800 focus:ring-slate-500",
    ghost: "text-slate-300 hover:bg-slate-800 hover:text-white focus:ring-slate-500",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
