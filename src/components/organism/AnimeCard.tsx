import Image from "next/image"
import { Card } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Link from "next/link"

const AnimeCard = ({ data }: { data: any }) => {
  return (
            <Card className="hover:scale-105 bg-black cursor-pointer transition-transform duration-300 rounded-lg overflow-hidden shadow-lg">
              <Link href={`/animedetail/${data.mal_id || data.entry[0].mal_id}`}>
              <Image
                src={data?.images?.webp?.image_url || data.entry[0].images.jpg.image_url}
                width={300}
                height={400}
                alt={data?.title || data.entry[0].title}
                className="object-cover w-full h-80"
                />
              <div className="p-2 text-center">
                <h3 className="text-white text-sm font-semibold truncate">
                  {data?.title || data.entry[0].title}
                </h3>
              </div>
              </Link>
           </Card>
        ) 
      }

export default AnimeCard
