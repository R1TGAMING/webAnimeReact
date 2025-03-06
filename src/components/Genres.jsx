import React from 'react'

function Genres({children}) {
  return (
    <div className='bg-slate-800 p-2 inline-block rounded-lg'>
        <p className='text-slate-500 font-black '>#{children}</p>
    </div>
  )
}

export default Genres