import { Menu } from "@/lib/definition";
import { MenuDropdown } from "@/components/nav/menu-dropdown";
export default function SideNav({ menu }: { menu: Menu[] }) {
  return (
    <div className='flex items-center xl:hidden'>
      <MenuDropdown menu={menu} />
    </div>
  );
}
