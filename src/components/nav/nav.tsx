"use client";
import Link from "next/link";
import Image from "next/image";
import SideNav from "./sidenav";
import { ModeToggle } from "@/components/ui/themetoggle";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Menu } from "@/lib/definition";
import FullAuthDialog from "./dialog-wrapper";
import clsx from "clsx";

export default function Nav({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  return (
    <div className='flex h-full flex-row items-center justify-between font-semibold w-full px-3 py-4 md:px-2'>
      <div className='flex gap-2'>
        <SideNav menu={menu} />
        <Link href='/'>
          <Image
            src='/images/icons8.png'
            alt='icon'
            width={50}
            height={50}
            priority
            className='select-none'
          />
        </Link>
      </div>

      <div className='px-5 hidden xl:block'>
        <ul className='flex-row space-x-4'>
          {menu.map((item, index) => {
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
          <li className='hidden xl:block cursor-pointer'>
            <FullAuthDialog>
              <a>Đăng nhập</a>
            </FullAuthDialog>
          </li>
        </ul>
      </div>
    </div>
  );
}
