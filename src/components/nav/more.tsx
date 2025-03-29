import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { list_item } from "@/lib/constants";

export function More() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='cursor-pointer flex items-center'>
          Xem Thêm
          <ChevronDown className='h-[1rem] w-[1rem]' />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        className='grid grid-cols-2 gap-x-4 gap-y-6 p-2 bg-white dark:bg-black'
      >
        {list_item.slice(3).map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <span className='cursor-pointer hover:text-blue-500 text-base'>
                {item.name}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
