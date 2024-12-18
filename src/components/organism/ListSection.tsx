import Image from "next/image"
import { Card } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import AnimeCard from "./AnimeCard"

const ListSection = ({ data }: { data: any }) => {
  return (
    <Carousel className="w-full relative">
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-white text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-300" />
      <CarouselContent className="flex space-x-4 px-4 py-4">
        {data?.map((item: any, index: number) => (
           <CarouselItem key={index} className="basis-1/5">
           <AnimeCard data={item}/>
          </CarouselItem>
        ))}
        </CarouselContent>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center transition duration-300" />
    </Carousel>
  )
}

export default ListSection
