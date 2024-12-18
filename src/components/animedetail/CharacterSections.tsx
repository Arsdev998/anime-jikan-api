import { UseGetAnimeCharacter } from '@/data/api/anime/useGetData'
import { useRouter } from 'next/router'
import { Skeleton } from '../ui/skeleton'
import Link from 'next/link'
import Image from 'next/image'

const CharacterSections = () => {
    const router = useRouter()
    const { animeId } = router.query
    const {data, isLoading} = UseGetAnimeCharacter(animeId as string)
    console.log(data)

    if(isLoading){
        return (
            <div className="flex p-4 justify-center items-center w-full h-[400px]">
                <Skeleton className="w-full h-full bg-gray-300" />
            </div>
        )
    }

    return (
        <div className="mt-5">
            <h2 className='text-center font-bold text-3xl'>Characters</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center place-items-center'>
                {data.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-2 justify-center items-center my-2">
                        <Link 
                            href={`/animedetail/character-detail/${item.character.mal_id}`} 
                            legacyBehavior
                        >
                            <a>
                                <Image 
                                    width={200} 
                                    height={200} 
                                    src={item.character.images.jpg.image_url} 
                                    alt={item.name} 
                                    className="w-20 h-20 rounded-full" 
                                />
                            </a>
                        </Link>
                        <h3 className="md:text-lg font-bold">{item.character.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CharacterSections