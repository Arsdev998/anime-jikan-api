"use client"
import { UseGetTopAnime } from '@/data/api/anime/useGetData'
import { Skeleton } from '../ui/skeleton'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaPlay } from "react-icons/fa";
import ModalPlayTrailer from '../organism/ModalPlayTrailer'
import { useState } from 'react'

function BannerTopAnime() {
    const { data, isError, isLoading } = UseGetTopAnime();
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [trailerData, setTrailerData] = useState<any>(null)

    const handleSetTrailer = (trailer:any) =>{
        setOpenModal(true)
        setTrailerData(trailer)
    }
    console.log(trailerData)

    return (
        <div className="relative py-1 max-w-8xl mx-auto">
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
                                <div className="absolute bottom-0 left-0 right-0 space-y-3 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                <div className="space-y-3 ml-2">
                                <div className="">
                                    <h2 className="text-xl font-bold">{item.titles[0].title}</h2>
                                    <p className="text-sm mt-1">
                                        {item.synopsis.slice(0, 100)}...
                                    </p>
                                </div>
                                 <Button onClick={()=> handleSetTrailer(item.trailer)} className="flex items-center gap-2">
                                    <FaPlay /> Putar Trailer
                                  </Button>
                                </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <ModalPlayTrailer trailer={trailerData} open={openModal} onClose={() => setOpenModal(false)}/>
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
            }
        </div>
    )
}

export default BannerTopAnime
