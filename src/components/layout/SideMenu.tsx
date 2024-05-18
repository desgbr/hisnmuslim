"use client"
import { getAzkarList } from '@/services/api'
import { zkrItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

const SideMenu = () => {
  const id: number = Number(useSearchParams()?.get('id'))
  const {isLoading, data: list} = useSWR('azkar-list', async () => await getAzkarList(), {
    revalidateOnFocus: false,
    refreshInterval: 30 * 60 * 60
  })

  return (
    <div className='bg-sky-950 text-white w-80 h-full overflow-y-auto flex flex-col gap-2'>
      {Object?.values(list || {})?.flat()?.map((item:zkrItem) => <Link href={item?.TITLE?.concat(`?id=${item?.ID}`)} key={item.ID} className={`flex items-center gap-4 border-b border-sky-800 px-4 py-1 ${id == item?.ID && 'bg-sky-800'}`}>
        <Image src='/zkr.png' alt='zkr' width={36} height={36} className='size-9 object-contain'  />
        <span className='text-balance'>{item?.TITLE}</span>
      </Link>)}
    </div>
  )
}

export default SideMenu