interface Props {
  children?: any
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  className?: string
}

const InternButton = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        'md:inline-flex items-center py-2 uppercase border border-indigo-900 font-medium rounded-full px-8 shadow-sm text-white text-weir  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:from-purple-800 hover:to-indigo-900 focus:ring-indigo-500 bg-gradient-to-b from-purple-700 to-indigo-800 ' +
        className
      }
    >
      {children}
    </button>
  )
}
export default InternButton
