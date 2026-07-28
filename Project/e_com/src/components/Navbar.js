import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './toggleTheme'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
      <h1>E-Com</h1>
      <div className='flex gap-6'>
        <Link href={'/home'}>Home</Link>
        <Link href={'/products'}>Products</Link>
      </div>
      <div><ModeToggle /></div>
    </div>
  )
}

export default Navbar
