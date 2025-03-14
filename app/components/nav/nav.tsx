"use client";
import Link from "next/link";
import Image from "next/image";
import SideNav from "./sidenav";
import { list_item } from "@/app/lib/constants";
import { ModeToggle } from "../themetoggle";
import { Search } from "lucide-react";
import { More } from "./more";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className='flex h-full flex-row items-center justify-between font-semibold w-full px-3 py-4 md:px-2'>
      <SideNav />
      <div>
        <Link href='/'>
          <Image
            src='/images/movie.png'
            alt='Movie'
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>

      <div className='px-5'>
        <ul className='hidden md:block flex-row space-x-4'>
          {list_item.slice(0, 3).map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  { "text-blue-600": pathname === item.link },
                  "inline-block hover:text-blue-500"
                )}
              >
                <Link href={item.link}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
          <li className='inline-block cursor-pointer hover:text-blue-500'>
            <div className='flex items-center space-x-1'>
              <More />
            </div>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <ul className='flex space-x-4 items-center'>
          <li className='cursor-pointer'>
            <Link href='/search'>
              <Search className='h-[1.2rem] w-[1.2rem]' />
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li className='hidden md:block cursor-pointer'>
            <span>Đăng nhập</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
