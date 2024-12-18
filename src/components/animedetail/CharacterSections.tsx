import { UseGetAnimeCharacter } from '@/data/api/anime/useGetData'
import { useRouter } from 'next/router'

const CharacterSections = () => {
    const router = useRouter()
    const { animeId } = router.query
    const {data} = UseGetAnimeCharacter(animeId as string)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default CharacterSections
