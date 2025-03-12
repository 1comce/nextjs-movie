"use client";
import Link from "next/link";
import { useState } from "react";
import { list_item } from "@/app/lib/constants";
import { Menu } from "lucide-react";
export default function SideNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu when overlay is clicked
  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  // Toggle the menu when menu icon is clicked
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center'>
      {/* Menu Icon Button (Label that toggles the menu) */}
      <label
        htmlFor='menu-toggle'
        className='md:hidden p-2 rounded-md cursor-pointer'
        onClick={handleMenuToggle} // Toggle the menu on click
      >
        <Menu className='h-[2rem] w-[2rem]' />
      </label>

      {/* Overlay */}
      {menuOpen && (
        <div
          className='fixed custom-inset-0 bg-gray-500 opacity-50 z-40 cursor-pointer'
          onClick={handleOverlayClick} // Close menu when overlay is clicked
        />
      )}

      {/* Side Navigation Menu */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-black text-white dark:bg-white dark:text-black shadow-md z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className='pt-6 px-6 flex-col space-y-1'>
          {list_item.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>
                  <span className='flex items-center py-2 text-lg text-lg hover:text-blue-800'>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
