'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

// AdminSidebar Component
const AdminSidebar = () => {
  const menuItems = [
    { label: "Products", href: "/admin/dashboard/products" },
    { label: "Slider", href: "/admin/dashboard/slider" },
    { label: "About", href: "/admin/dashboard/about" },
    { label: "Footer", href: "/admin/dashboard/footer" },
    { label: "Contact", href: "/admin/dashboard/contact" },
  ];

  return (
    <nav className="bg-neutral-700 w-64 h-screen p-6 flex flex-col justify-between">
      {/* Top: Logo and Title */}
      <div className="overflow-y-auto">
        <Link href="/admin" className="flex items-center space-x-2 py-5">
          <figcaption>
            <p className="font-black uppercase text-2xl text-white">Admin Panel</p>
          </figcaption>
          <figure>
            <Image
              src="/logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
          </figure>
        </Link>

        {/* Menu Links */}
        <ul className="space-y-4">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link
                href={menuItem.href}
                className="text-white hover:bg-neutral-600 p-2 rounded-md block"
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: Home & Logout */}
      <div className="space-y-2 mt-4">
        <Link
          href="/"
          className="text-white hover:bg-blue-600 p-2 rounded-md block text-left"
        >
          Home
        </Link>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default AdminSidebar;
