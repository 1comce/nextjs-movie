"use client";
import { ListMovie } from "@/lib/definition";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ORIGINAL_IMG_BASE_URL } from "@/lib/constants";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
export default function TopSlider({ list }: { list: any }) {
  return (
    <div className='flex items-center justify-center pt-2 w-full'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent>
          {list.map((item: any, index: number) => {
            if (item.media_type == "person") return null;
            const title = item.media_type === "movie" ? item.title : item.name;
            return (
              <CarouselItem key={index} className='basis-full '>
                <div className='relative flex w-full aspect-[2/1] items-center justify-center rounded-md md:rounded-none overflow-hidden'>
                  <Image
                    src={ORIGINAL_IMG_BASE_URL + item.backdrop_path}
                    alt={title}
                    width={1000}
                    height={1000}
                    className='w-full h-full select-none'
                  />
                  {/* background to cover banner */}
                  <div className='absolute custom-inset-0 w-full h-full bg-gradient-to-t from-black from-3% via-transparent to-transparent cursor-pointer'>
                    <Link
                      className='absolute custom-inset-0 w-full h-full'
                      href={`/watch/${item.id}?type=${item.media_type}`}
                    />
                  </div>
                  {/* banner meta */}
                  <div className='absolute bottom-0 left-0 p-[1rem] md:p-[3rem] text-white  bg-gradient-to-tr from-black from-10% via-transparent to-transparent w-1/2'>
                    <div className='flex font-bold text-base md:text-lg text-left'>
                      <p className='line-clamp-1 md:line-clamp-3'>{title}</p>
                    </div>
                    <div className='text-left text-sm md:text-base'>
                      <p className='line-clamp-3 md:line-clamp-4'>
                        {item.overview}
                      </p>
                    </div>
                    <div className='flex'>
                      <Button
                        variant={"custom"}
                        className='cursor-pointer w-[6rem] p-0'
                      >
                        <Link
                          className='w-full h-full flex items-center justify-center'
                          href={`/watch/${item.id}?type=${item.media_type}`}
                        >
                          <Play className='fill-current' />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant='default'
          className='bg-transparent hover:bg-transparent -left-0 cursor-pointer opacity-50 hover:opacity-100 h-[2rem] rounded-none px-3 md:px-8'
        />
        <CarouselNext
          variant='default'
          className='bg-transparent hover:bg-transparent -right-0 cursor-pointer opacity-50 hover:opacity-100 h-[2rem] rounded-none px-3 md:px-8'
        />
      </Carousel>
    </div>
  );
}
