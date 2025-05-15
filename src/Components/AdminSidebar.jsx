'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Reusable DropdownMenu Component
const DropdownMenu = ({ label, items, isOpen, onClick }) => {
  return (
    <li className="space-y-2">
      <button
        className="text-white w-full text-left hover:bg-neutral-600 p-2 rounded-md flex items-center justify-between bg-neutral-800"
        onClick={onClick}
      >
        {label}
        {isOpen ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </button>
      {isOpen && (
        <ul className="pl-4 space-y-2 bg-neutral-800 rounded-md">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:underline p-2 rounded-md block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const AdminSidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const menuItems = [
    {
      label: "Products",
      items: [
        { label: "Create Products", href: "/admin/dashboard" },
        { label: "Update Products", href: "/admin/dashboard" },
        { label: "Delete Products", href: "/admin/dashboard" },
      ],
    },
    {
      label: "Slider",
      items: [
        { label: "Create Slider", href: "/admin/dashboard" },
        { label: "Delete Slider", href: "/admin/dashboard" },
      ],
    },
    {
      label: "About",
      items: [{ label: "Update About", href: "/admin/dashboard" }],
    },
    {
      label: "Footer",
      items: [{ label: "Delete Footer", href: "/admin/dashboard" }],
    },
    {
      label: "Contact",
      items: [{ label: "Update Contact", href: "/admin/dashboard" }],
    },
  ];

  const handleDropdownClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-neutral-700 w-64 h-screen p-6 flex flex-col justify-between">
      {/* Top: Logo and Menu */}
      <div className="overflow-y-auto">
        <div className='flex items-center space-x-2 py-5'>
          <figcaption>
            <p className="font-black uppercase text-2xl">Admin Panel</p>
          </figcaption>
          <figure>
            <Image
              src="/logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
          </figure>
        </div>
        <ul className="space-y-4">
          {menuItems.map((menuItem, index) => (
            <DropdownMenu
              key={index}
              label={menuItem.label}
              items={menuItem.items}
              isOpen={openIndex === index}
              onClick={() => handleDropdownClick(index)}
            />
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
