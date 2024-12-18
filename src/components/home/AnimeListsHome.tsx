import { UseGetRecomendationsAnime } from '@/data/api/anime/useGetData'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import AnimeCard from '../organism/AnimeCard'
import ListSection from '../organism/ListSection'
import ListSectionLoading from '../loading/ListSectionLoading'

interface AnimeListHomeProps {
  data: [],
  title:string,
  isLoading: boolean,
  isError: boolean
}
export default function AnimeListHome({data,title,isLoading,isError}:AnimeListHomeProps) {
    console.log(data)
    if(isError){
        return (
            <div className='flex justify-center items-center h-[300px]'>
                <div className='text-lg font-semibold'>Error</div>
            </div>
        )
    }
  return (
    <div className='relative py-1 max-w-8xl mx-auto'>
        <h1 className='text-2xl font-bold ml-4'>{title}</h1>
      {
        isLoading ?<ListSectionLoading/>
        : 
        <div className='relative py-1 max-w-8xl mx-auto'>
           <ListSection data={data}/>
        </div>
      }
    </div>
  )
}
