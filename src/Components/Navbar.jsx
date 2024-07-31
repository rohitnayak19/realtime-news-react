import React from 'react'


const Navbar = ({onNavItemClick, handleInputChange, handleSearch, reload}) => {
  return (
    <>
      <nav className='nav p-2 boxShadow bg-[#f7f5f3] text-zinc-700'>
        <div className="main-nav max-w-[85%] mx-auto">
        <div className='flex flex-col flex-wrap md:flex-row md:justify-between md:items-center gap-3'>
          <div className="flex flex-col md:text-center cursor-pointer" onClick={reload}>
            <span >The</span>
            <span className='bg-[#728FCE] text-white py-1 px-2 rounded-sm w-fit'>Nayak</span>
            <span>Media</span>
          </div>

          <div className='nav-items'>
            <ul className='flex gap-4 flex-wrap'>
              <li onClick={() => onNavItemClick('Cricket')} className='cursor-pointer transition delay-75 ease-in hover:text-[#728FCE]'>Cricket</li>
              <li onClick={() => onNavItemClick('Technology')} className='cursor-pointer transition delay-75 ease-in hover:text-[#728FCE]'>Technology</li>
              <li onClick={() =>onNavItemClick('Politics')} className='cursor-pointer transition delay-75 ease-in hover:text-[#728FCE]'>Politics</li>
              <li onClick={() => onNavItemClick('Olympics')} className='cursor-pointer transition delay-75 ease-in hover:text-[#728FCE]'>Olympics</li>
            </ul>
          </div>

          <div className="inputSection">
            <input onChange={handleInputChange} className='p-1 outline-none border border-[#728FCE] rounded-sm' type="text" placeholder='serch news..'/>
            <button onClick={handleSearch} className='bg-[#728FCE] py-1  px-2 transition-all ease-in delay-75 text-white p-1 rounded-sm ml-1 mt-1 md:mt-0 hover:bg-[#5970a1] hover:scale-105'>Search</button>
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar