const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"

  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-slate-700 text-slate-300",
    outline: "border border-slate-600 text-slate-300",
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge
