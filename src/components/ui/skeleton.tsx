import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[hsl(240,4.8%,30%)]",
        className
      )}
      {...props}
    />
  );
}
function VideoSkeleton() {
  return <Skeleton className='w-full aspect-video' />;
}
function SliderSkeleton() {
  return (
    <div className='flex flex-col items-center justify-center pt-4 w-full space-y-2'>
      {/* on top of swiper */}
      <div className='w-full flex justify-between'>
        <span className='font-semibold md:text-lg'>Loading</span>
        <a href='#'>
          <span>More</span>
        </a>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full'
      >
        <CarouselContent className='px-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='basis-[40%] md:basis-1/5 pl-2'>
              <div className='flex flex-col justify-center items-center'>
                <Skeleton className='flex w-full aspect-[1/1.75] items-center justify-center p-0 overflow-hidden' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
function HomeSkeleton() {
  return (
    <>
      <SliderSkeleton />
      <SliderSkeleton />
      <SliderSkeleton />
      <SliderSkeleton />
      <SliderSkeleton />
    </>
  );
}
function SearchSkeleton() {
  return (
    <div className='w-full text-left pt-2'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2'>
        {Array.from({ length: 10 }).map((_, index: number) => {
          return (
            <div key={index} className='w-full'>
              <div className='relative rounded-md overflow-hidden'>
                <Skeleton className='w-[15rem] aspect-[1/1.4]'></Skeleton>
              </div>
              {/* <p className='line-clamp-1'>{item.overview}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export {
  Skeleton,
  VideoSkeleton,
  SliderSkeleton,
  HomeSkeleton,
  SearchSkeleton,
};
