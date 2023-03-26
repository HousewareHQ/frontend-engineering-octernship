import React from 'react';

export const NotFound = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 min-h-screen">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <h3 className='text-xl font-medium'>Sorry, the page you are looking for does not exist.</h3>
      <h3 className='text-xl font-medium'>You can always go back to the <a href="/" className='underline hover:text-blue-500'>homepage</a>.</h3>
      <a href="https://github.com/doaortu/frontend-engineering-octernship-doaortu-fork" className='absolute bottom-0 right-0 text-center p-3 m-2 bg-zinc-900 hover:bg-zinc-800 font-bold text-white'>
        @doaortu
      </a>
    </div>
  )
}