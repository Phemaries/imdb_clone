"use client";


import { ThemeProvider } from 'next-themes'

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} atrribute="class">
      <div className='dark:bg-gray-700 dark:text-gray-200 transition-colors duration-3000 min-h-screen select-none'>
        {children} 
      </div>
      
    </ThemeProvider>
  )
}

export default Providers
