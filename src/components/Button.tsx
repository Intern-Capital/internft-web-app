interface Props {
  children: any
  onClick?: any
}

const InternButton = ({ children, onClick }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex items-center py-2 border border-indigo-900 text-sm leading-4 font-medium rounded-full px-8 shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 
        hover:from-purple-800 hover:to-indigo-900 focus:ring-indigo-500 bg-gradient-to-b from-purple-700 to-indigo-800'
    >
      {children}
    </button>
  )
}
export default InternButton
