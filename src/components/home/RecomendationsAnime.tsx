import { UseGetRecomendationsAnime } from '@/data/api/useGetData'
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import AnimeCard from '../organism/AnimeCard'

export default function RecomendationsAnime() {
    const {data, isLoading,isError} = UseGetRecomendationsAnime()
    console.log(data)
  return (
    <div>
        <h1>Recommendations Anime</h1>
      {
        isLoading ?
        <Skeleton/> 
        : 
        <div className='relative py-1 max-w-8xl mx-auto'>
           <AnimeCard data={data}/>
        </div>
      }
    </div>
  )
}
