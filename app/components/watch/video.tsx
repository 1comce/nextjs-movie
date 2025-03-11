import { getTrailer } from "@/app/lib/actions";
import Test from "./test";
export default async function Video({
  id,
  type,
}: {
  id: string;
  type: string;
}) {
  const path = await getTrailer(id, type);
  // Check if the path is a YouTube embed URL or a direct video URL
  const isYouTube = path.includes("youtube.com/embed");

  return (
    <>
      <Test path={path} />
      {isYouTube ? (
        // If it's a YouTube embed link, use an iframe
        <iframe
          className='w-full aspect-video'
          src={path}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      ) : (
        // If it's a direct video URL, use the video tag
        <video src={path} className='video-player w-full aspect-video' controls>
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
}
