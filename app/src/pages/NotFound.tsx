import React from 'react';

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <h3 className='text-xl font-medium'>Sorry, the page you are looking for does not exist.</h3>
      <h3 className='text-xl font-medium'>You can always go back to the <a href="/" className='underline hover:text-blue-500'>homepage</a>.</h3>
    </div>
  )
}