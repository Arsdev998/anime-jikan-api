import React from 'react'
import BannerTopAnime from './BannerTopAnime'
import RecomendationsAnime from './RecomendationsAnime'
import AnimeListHome from './AnimeListsHome'
import { UseGetAnimeSeasonsNow, UseGetAnimeSeasonsSpring, UseGetAnimeSeasonsWinter, UseGetRecomendationsAnime } from '@/data/api/anime/useGetData'

const HomePage = () => {
  const data = new Date()
  const year = data.getFullYear()
  const {data:seasonsNow, isError:seasonsNowError , isLoading:seasonsNowLoading} = UseGetAnimeSeasonsNow()
  const {data:seasonsSpring, isError:seasonsSpringError , isLoading:seasonsSpringLoading} = UseGetAnimeSeasonsSpring(year)
  const {data:seasonsWinter, isError:seasonsWinterError , isLoading:seasonsWinterLoading} = UseGetAnimeSeasonsWinter(year)
  const {data:topAnimeData, isLoading:topAnimeLoading,isError:topAnimeError} = UseGetRecomendationsAnime()
  return (
    <section className='px-4'>
      <BannerTopAnime/>
      {/* <RecomendationsAnime/> */}
      <AnimeListHome data={seasonsNow} isLoading={seasonsNowLoading}  title={'Seasons Now'} isError={seasonsNowError}/>
      <AnimeListHome data={seasonsSpring} isLoading={seasonsSpringLoading}  title={`Seasons Spring ${year}`} isError={seasonsSpringError}/>
      <AnimeListHome data={seasonsWinter} isLoading={seasonsWinterLoading}  title={`Seasons Winter ${year}`} isError={seasonsWinterError}/>
      <AnimeListHome data={topAnimeData} isLoading={topAnimeLoading}  title={'Top Anime'} isError={topAnimeError}/>
    </section>
  )
}

export default HomePage
