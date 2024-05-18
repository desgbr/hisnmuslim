import { singleZkrProps } from '@/types'
import React from 'react'
import Coutner from '../Coutner'

const SingleZkr = ({text, count, audio}: singleZkrProps) => {
  return (
    <div className='border rounded-md mb-4 p-4 bg-green-700 text-white relative overflow-hidden flex '>
      <p className='text-xl w-full'>{text}</p>
      <Coutner count={count} />
    </div>
  )
}

export default SingleZkr