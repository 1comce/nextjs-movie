import { getTrendingAll } from "@/app/lib/actions";
import Image from "next/image";
import { ORIGINAL_IMG_BASE_URL } from "@/app/lib/constants";
import Link from "next/link";
import { Play } from "lucide-react";
export default async function PlaceHolder() {
  // Fetch the trending data
  const data = await getTrendingAll();

  // Render the data by mapping over it
  return (
    <div className='w-full text-left pt-2'>
      <span className='text-lg font-semibold'>Trending</span>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-2'>
        {data.map((item: any, index: number) => {
          if (item.media_type === "person") return null;
          if (item.poster_path === null) return null;
          const title = item.media_type === "movie" ? item.title : item.name;
          return (
            <div key={index} className='w-full'>
              <div className='relative rounded-md overflow-hidden'>
                <Image
                  src={ORIGINAL_IMG_BASE_URL + item.poster_path}
                  alt={title}
                  width={1000}
                  height={1000}
                  className='w-[15rem] select-none '
                />
                <div className='absolute flex items-center justify-center inset-0 w-full h-full bg-black opacity-0 hover:opacity-30 cursor-pointer'>
                  <Link
                    className='flex items-center justify-center w-full h-full'
                    href={`/watch/${item.id}?type=${item.media_type}`}
                  >
                    <Play className='fill-white w-10 h-10' />
                  </Link>
                </div>
              </div>

              <span>{title}</span>
              {/* <p className='line-clamp-1'>{item.overview}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
