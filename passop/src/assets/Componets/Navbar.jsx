import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4  py-4 h-14">

      <div className=' font-bold text-2xl'>
        <div className='logo font-bold text-2xl'>
          <span className='text-green-500'>&lt;</span>
         Pass
          <span className='text-green-500'>OP/&gt;</span>
        </div>
      </div>
    
      <button className='bg-green-500 text-white px-4 py-2 flex items-center justify-between rounded-full hover:bg-green-600'>
        <img src="/icons/github.svg" alt="GitHub" className='w-8 invert h-8 inline' />
        <span className='ml-2 font-bold'>GitHub</span>
      </button>
      </div>

    </nav>
  )
}

export default Navbar
