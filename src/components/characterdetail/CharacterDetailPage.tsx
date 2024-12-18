"use client";
import { UseGetAnimeCharacterDetail } from "@/data/api/anime/useGetData";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CharacterDetailPage = () => {
  const router = useRouter();
  const { mal_id } = router.query;

  const { data, isLoading } = UseGetAnimeCharacterDetail(mal_id as string);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters className="text-6xl animate-spin text-blue-600"/>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Character not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-56 md:h-72">
          <Image
            src={data.images.jpg.image_url}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:flex md:items-center">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto md:mx-0 -mt-20 md:mt-0 border-4 border-white rounded-full shadow-md overflow-hidden">
            <Image
              src={data.images.jpg.image_url}
              alt={data.name}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-sm mb-2">
              <span className="font-medium">Kanji: </span>
              {data.name_kanji || "N/A"}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Nicknames: </span>
              {data.nicknames.length > 0
                ? data.nicknames.join(", ")
                : "No nicknames available"}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Favorites: </span>
              {data.favorites || 0}
            </p>
            <Link href={data.url}>
            <Button variant={"outline"}>
                View More
            </Button>
            </Link>
          </div>
        </div>
        <div className="p-6 ">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="tleading-relaxed whitespace-pre-line">
            {data.about || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
