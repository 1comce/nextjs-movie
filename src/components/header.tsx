"use server";
import Nav from "./nav/nav";
import { getMenu } from "@/lib/actions";
import { Menu } from "@/lib/definition";
export default async function Header() {
  const menu = (await getMenu()) as Menu[];
  return (
    <header className='sticky top-0 z-50 flex items-center justify-center w-full flex-1 text-center border-b bg-white/80 dark:bg-black/80 backdrop-blur-md'>
      <Nav menu={menu} />
    </header>
  );
}
