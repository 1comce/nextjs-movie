import { getSearchMulti } from "@/app/lib/actions";
import Image from "next/image";
import { ORIGINAL_IMG_BASE_URL } from "@/app/lib/constants";
import Link from "next/link";
import { Play } from "lucide-react";
export default async function SearchResult({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}) {
  const data = await getSearchMulti(query, page);
  if (data.length == 0) {
    return (
      <div className='w-full text-left pt-2'>
        <span className='text-lg font-semibold'>Search Result</span>
        <div>no data</div>
      </div>
    );
  }
  return (
    <div className='w-full text-left pt-2'>
      <span className='text-lg font-semibold'>Search Result</span>
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
                  className='aspect-[2/3] select-none '
                />
                <div className='absolute flex items-center justify-center custom-inset-0 w-full h-full bg-black opacity-0 hover:opacity-30 cursor-pointer'>
                  <Link
                    className='flex items-center justify-center w-full h-full'
                    href={`/watch/${item.id}?type=${item.media_type}`}
                  >
                    <Play className='fill-white w-10 h-10' />
                  </Link>
                </div>
              </div>

              <span className='line-clamp-1'>{title}</span>
              {/* <p className='line-clamp-1'>{item.overview}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
