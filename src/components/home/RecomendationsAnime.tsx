import { UseGetRecomendationsAnime } from '@/data/api/anime/useGetData'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import AnimeCard from '../organism/AnimeCard'
import ListSection from '../organism/ListSection'
import ListSectionLoading from '../loading/ListSectionLoading'

export default function RecomendationsAnime() {
    const {data, isLoading,isError} = UseGetRecomendationsAnime()
    console.log(data)
  return (
    <div>
        <h1 className='text-2xl'>Recommendations Anime</h1>
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
