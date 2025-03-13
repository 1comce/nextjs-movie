"use client";
import { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useDebouncedCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }, 100);

  useEffect(() => {
    // Adding the scroll event listener on mount
    window.addEventListener("scroll", toggleVisible);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={clsx(
        visible ? "flex" : "hidden",
        "fixed z-1 bg-blue-500 border rounded-md flex cursor-pointer justify-center items-center w-[3rem] h-[3rem] right-10 bottom-10"
      )}
      onClick={scrollToTop}
    >
      <ArrowBigUp className='fill-white w-[2rem] h-[2rem] stroke-1' />
    </div>
  );
}
