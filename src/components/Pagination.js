import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div className='flex flex-row w-2/12 space-x-4  p-6  '>
       {gotoPrevPage && <button className='text-2xl bg-bluecrayola rounded-lg text-platnium w-auto p-3' onClick={gotoPrevPage}>Previous</button>}
       {gotoNextPage && <button className='text-2xl bg-bluecrayola rounded-lg text-platnium w-auto p-3' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

export default Pagination