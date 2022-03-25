interface Props {
  children?: any
  onClick?: any
  className?: string
}

const InternBullet = ({ children, className }: Props) => {
  return (
    <div
      className={
        className +
        "absolute justify-center h-12 w-12 inline-flex items-center p-1 uppercase border border-indigo-900 font-medium rounded-full shadow-sm hover:from-purple-800 hover:to-indigo-900 bg-gradient-to-b from-purple-700 to-indigo-800 "
      }
    >
      {children}
    </div>
  )
}
export default InternBullet
