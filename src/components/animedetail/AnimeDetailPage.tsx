import React from 'react'
import { useRouter } from 'next/router'
import { UseGetAnimeById } from '@/data/api/anime/useGetData'
import { Clock, Star, Film, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'
import { Skeleton } from '../ui/skeleton'
import CharacterSections from './CharacterSections'

const AnimeDetailPage = () => {
  const router = useRouter()
  const { animeId } = router.query
  const { data, isLoading } = UseGetAnimeById(animeId as string);

  if (isLoading) {
    return (
     <div className="min-h-screen w-full px-4 py-8 grid md:grid-cols-3 gap-8">
        <Skeleton className='bg-neutral-800/20 w-full h-[600px]'/>
        <Skeleton className='bg-neutral-800/20 w-full md:min-w-[1000px] h-full'/>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500 text-2xl">Anime not found</div>
      </div>
    )
  }
  console.log(data)

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Anime Poster */}
          <div className="md:col-span-1">
            <div className="sticky top-22">
              <Image
                width={300}
                height={400}
                src={data?.images?.webp.large_image_url || data?.images?.jpg.image_url} 
                alt={data.title} 
                className="w-full h-[600px] rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Anime Details */}
          <div className="md:col-span-2 bg-black/25 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-white">{data.title}</h1>
            <h2 className="text-xl text-gray-400 mb-6">{data.title_japanese}</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <Star className="text-yellow-500" />
                <span>Score: {data.score} / 10</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-500" />
                <span>Aired: {data?.aired?.string}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Film className="text-green-500" />
                <span>Episodes: {data.episodes}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-purple-500" />
                <span>Duration: {data.duration}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
              <p className="text-gray-300 leading-relaxed">{data.synopsis}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {data?.genres?.map((genre:any) => (
                    <span 
                      key={genre.mal_id} 
                      className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              {
                data?.themes?.length > 0 && (
                <div className="">
                <h3 className="text-xl font-semibold mb-3">Themes</h3>
                <div>
                <div className="flex flex-wrap gap-2">
                  {data.themes.map((theme:any) => (
                      <span 
                      key={theme.mal_id} 
                      className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm"
                      >
                      {theme.name}
                    </span>
                  ))}
                 </div>
                  </div>
                </div>
                )
              }
            </div>
            {data.trailer && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Trailer</h3>
                <div className="aspect-w-16 aspect-h-100">
                  <iframe 
                    src={data.trailer.embed_url} 
                    title="Anime Trailer"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
           <CharacterSections/>
    </div>
  )
}

export default AnimeDetailPage