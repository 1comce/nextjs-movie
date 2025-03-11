"use client";
import { use, useEffect, useState, useRef } from "react";
import { getDataList } from "../lib/actions";
import Image from "next/image";
import Link from "next/link";
import { ORIGINAL_IMG_BASE_URL } from "../lib/constants";
import { Play, Loader } from "lucide-react";
export default function Page({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    type?: "movie" | "tv" | "person";
  }>;
}) {
  const { category = "popular", type = "movie" } = use(searchParams);
  const [data, setData] = useState([]) as any;
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ref = useRef(null);
  const getData = async (category: string, type: string, page = 1) => {
    const res = await getDataList(category, type, page);
    setHasMore(res.page <= res.total_pages);
    setPage((prev) => prev + 1);
    setData((prev: any) => [...prev, ...res.data]);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        getData(category, type, page);
      }
    });
    if (observer && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [data]);
  return (
    <div className='w-full'>
      <div className='w-full text-left pt-2'>
        <span className='text-lg font-semibold'>
          {category.replaceAll("_", " ")[0].toUpperCase() +
            category.replaceAll("_", " ").slice(1)}
        </span>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-2'>
          {data.map((item: any, index: number) => {
            if (item.media_type === "person") return null;
            if (item.poster_path === null) return null;
            const title = item.title ? item.title : item.name;
            return (
              <div key={index} className='w-full'>
                <div className='relative rounded-md overflow-hidden'>
                  <Image
                    src={ORIGINAL_IMG_BASE_URL + item.poster_path}
                    alt={item.id}
                    width={1000}
                    height={1000}
                    className='aspect-[2/3] select-none '
                  />
                  <div className='absolute flex items-center justify-center inset-0 w-full h-full bg-black opacity-0 hover:opacity-30 cursor-pointer'>
                    <Link
                      className='flex items-center justify-center w-full h-full'
                      href={`/watch/${item.id}?type=${type}`}
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
      {hasMore && (
        <div ref={ref} className='w-full flex justify-center pt-2'>
          <Loader className='animate-spin' />
        </div>
      )}
    </div>
  );
}
