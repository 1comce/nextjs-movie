"use client";
import { useEffect, useState } from "react";
export default function Test({ path }: { path: string }) {
  const [videoPath, setVideoPath] = useState("");
  useEffect(() => {
    setVideoPath(path);
    return;
  }, [path]);
  return (
    <div>
      <a
        href={videoPath.replace("embed", "watch")}
        className='underline'
        target='_blank'
      >
        Link to youtube video
      </a>
    </div>
  );
}
