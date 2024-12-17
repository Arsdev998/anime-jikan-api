import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

const AnimeCard = ({ data }: { data: any }) => {
  return (
    <Carousel className="w-full relative">
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-white text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-300" />
      <CarouselContent className="flex space-x-4 px-4 py-4">
        {data.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-1/5">
            <Card className="hover:scale-105 bg-black transition-transform duration-300 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.images.webp.image_url}
                width={300}
                height={400}
                alt={item.title}
                className="object-cover w-full h-80"
                />
              <div className="p-2 text-center">
                <h3 className="text-white text-sm font-semibold truncate">
                  {item.title}
                </h3>
              </div>
            </Card>
          </CarouselItem>
        ))}
        </CarouselContent>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-300" />
    </Carousel>
  )
}

export default AnimeCard
