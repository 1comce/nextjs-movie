"use client";
import { useEffect, useState } from "react";
export default function Test({ path }: { path: string }) {
  const [videoPath, setVideoPath] = useState("");
  useEffect(() => {
    setVideoPath(path);
    return;
  }, [path]);
  return <div>{videoPath}</div>;
}
