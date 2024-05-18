import React from 'react'

const Footer = () => {
  return (
    <div className='bg-sky-950 p-4 text-white'>
      <div className="container mx-auto text-center">
        &copy; حقوق الملكية محفوظة - حصن المسلم {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default Footer