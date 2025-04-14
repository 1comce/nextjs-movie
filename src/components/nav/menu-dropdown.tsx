import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu as MenuIcon, User } from "lucide-react";
import { Menu } from "@/lib/definition";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  DialogWrapper,
  DialogTriggerWrapper,
  AuthDialog,
} from "@/components/nav/dialog-wrapper";
import Link from "next/link";
export function MenuDropdown({ menu }: { menu: Menu[] }) {
  const [open, setOpen] = useState(false);
  return (
    <DialogWrapper open={open} onOpenChange={setOpen}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <MenuIcon className='h-[2rem] w-[2rem] cursor-pointer' />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='start'
          className='max-w-[360px] w-[calc(100vw-2rem)]  bg-blue-500/70 xl:hidden mt-5 space-y-2'
        >
          <DialogTriggerWrapper>
            <DropdownMenuItem className='focus:text-inherit focus:bg-transparent'>
              <Button
                variant='outline'
                className='w-full bg-gray-200 hover:bg-white text-black'
              >
                <User className='h-[2rem] w-[2rem]' />
                Đăng nhập
              </Button>
            </DropdownMenuItem>
          </DialogTriggerWrapper>

          <DropdownMenuItem className='focus:text-inherit focus:bg-transparent'>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-6 p-2 w-full text-white'>
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>
                      <span className='hover:text-blue-300 hover:underline'>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AuthDialog onSuccess={() => setOpen(false)} />
    </DialogWrapper>
  );
}
