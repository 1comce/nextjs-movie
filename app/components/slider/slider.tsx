import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ListMovie, ListTv } from "@/app/lib/definition";
import { ORIGINAL_IMG_BASE_URL } from "@/app/lib/constants";
import { Play } from "lucide-react";
import Link from "next/link";
export default function Slider({
  list,
  category,
  type,
}: {
  list: ListMovie[] | ListTv[];
  category: string;
  type: string;
}) {
  return (
    <div className='flex flex-col items-center justify-center pt-4 w-full space-y-2'>
      {/* on top of swiper */}
      <div className='w-full flex justify-between'>
        <span className='font-semibold md:text-lg'>
          {category.replaceAll("_", " ")[0].toUpperCase() +
            category.replaceAll("_", " ").slice(1)}
        </span>
        <Link href={`/highlight?category=${category}&type=${type}`}>
          <span>More</span>
        </Link>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //     stopOnInteraction: false,
        //   }),
        // ]}
        className='w-full'
      >
        <CarouselContent className='px-2'>
          {list.map((item: ListMovie | ListTv, index) => {
            const isMovie = "original_title" in item; // Check if the item is a ListMovie
            const altText = isMovie ? item.original_title : item.name;
            return (
              <CarouselItem
                key={index}
                className='basis-[40%] md:basis-1/5 pl-2'
              >
                <div className='flex flex-col justify-center items-center'>
                  <div className='relative flex w-full aspect-[1/1.75] items-center justify-center p-0 rounded-md overflow-hidden'>
                    <Image
                      src={ORIGINAL_IMG_BASE_URL + item.poster_path}
                      alt={altText}
                      width={300}
                      height={300}
                      className='w-full h-full select-none'
                    />
                    {/* play overlay */}
                    <div className='absolute flex items-center justify-center custom-inset-0 w-full h-full bg-black opacity-0 hover:opacity-30 cursor-pointer'>
                      <Link
                        className='flex items-center justify-center w-full h-full'
                        href={`/watch/${item.id}?type=${type}`}
                      >
                        <Play className='fill-white w-10 h-10' />
                      </Link>
                    </div>
                  </div>
                  <div className='w-full text-left'>
                    <span className='line-clamp-1 text-sm md:text-base'>
                      {isMovie ? item.title : item.name}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant='ghost'
          className='-left-0 cursor-pointer opacity-0 hover:opacity-100 hover:bg-gradient-to-r from-black to-tranparent h-full rounded-none disabled:opacity-0 px-3 md:px-8 hover:text-white'
        />
        <CarouselNext
          variant='ghost'
          className='-right-0 cursor-pointer opacity-0 hover:opacity-100 hover:bg-gradient-to-l from-black to-tranparent h-full rounded-none disabled:opacity-0 px-3 md:px-8 hover:text-white'
        />
      </Carousel>
    </div>
  );
}
