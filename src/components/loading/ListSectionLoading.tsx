import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ListSectionLoading = () => {
  return (
    <div className='flex space-x-4 px-4 py-4'>
      <Skeleton className='w-[320px] h-[357px]'/> 
      <Skeleton className='w-[320px] h-[357px]'/> 
      <Skeleton className='w-[320px] h-[357px]'/> 
      <Skeleton className='w-[320px] h-[357px]'/> 
      <Skeleton className='w-[320px] h-[357px]'/> 
    </div>
  )
}

export default ListSectionLoading
