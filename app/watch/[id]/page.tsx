import { notFound } from "next/navigation";
import Video from "@/app/components/watch/video";
import { Suspense, use } from "react";
import { VideoSkeleton } from "@/app/components/ui/skeleton";
export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type?: "movie" | "tv" | "person" }>;
}) {
  const { id } = use(params);
  const { type = "movie" } = use(searchParams);
  if (!id || !["movie", "tv", "person"].includes(type)) {
    notFound();
  }
  return (
    <div className='w-full'>
      <Suspense fallback={<VideoSkeleton />}>
        <Video id={id} type={type} />
      </Suspense>
    </div>
  );
}
