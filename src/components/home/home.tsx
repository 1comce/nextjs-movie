import { HomeSkeleton } from "../ui/skeleton";
import { Suspense } from "react";
import SliderWrapper from "./sliderwrapper";
export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Suspense fallback={<HomeSkeleton />}>
        <SliderWrapper />
      </Suspense>
    </div>
  );
}
