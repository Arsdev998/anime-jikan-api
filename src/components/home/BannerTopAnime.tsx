"use client"
import { UseGetTopAnime } from '@/data/api/useGetData'
import { Skeleton } from '../ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

function BannerTopAnime() {
    const { data, isError, isLoading } = UseGetTopAnime()


    return (
        <div className="relative px-4 py-1 max-w-8xl mx-auto">
            {
                isLoading ? <div className="flex p-4 justify-center items-center w-full h-[400px]">
                <Skeleton className="w-full h-full bg-gray-300" />
                    </div> 
            :
            <Carousel className="w-full">
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselContent>
                    {data?.map((item: any) => (
                        <CarouselItem key={item.mal_id} className="p-2">
                            <div className="relative group overflow-hidden rounded-lg shadow-md">
                                <Image
                                    alt={item.titles[0].title}
                                    width={1200}
                                    height={600}
                                    src={item.trailer.images.maximum_image_url || item.images.webp.large_image_url}
                                    className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
                                    />
                                {/* Overlay Teks */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                    <h2 className="text-lg font-bold">{item.titles[0].title}</h2>
                                    <p className="text-sm mt-1">
                                        {item.synopsis.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
            }
        </div>
    )
}

export default BannerTopAnime
