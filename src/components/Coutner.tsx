'use client'
import { handleCountText } from '@/utils'
import React, { useState } from 'react'
import CheckIcon from './icons/CheckIcon'

const Coutner = ({count}:{count: number}) => {
  const [state, setState] = useState(0)
  return (
    <div className='ms-4 border-r border-green-900 w-48'>
      <div className=" flex flex-col items-center gap-4">
        <div> {handleCountText(count)}</div>
        <button disabled={state === count} onClick={() => setState(prev => prev + 1)} className='size-10 rounded-full border border-green-600 bg-green-900 flex items-center justify-center cursor-pointer'>{state === count ? <CheckIcon className='text-green-500'/> : <span className='pt-1'>{state}</span>}</button>
      </div>

      <div className='absolute bottom-0 start-0 h-3 bg-green-800 rotate-180' style={{width: `${((state/count ) * 100)}%`}} />
    </div>
  )
}

export default Coutner