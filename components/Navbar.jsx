import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-gray-600 text-gray-900 bg-amber-100 lg:text-lg gap-4 p-4'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar
