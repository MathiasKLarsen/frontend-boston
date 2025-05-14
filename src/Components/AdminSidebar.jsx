'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons from react-icons
import LogoutButton from "./LogoutButton";

// Reusable DropdownMenu Component
const DropdownMenu = ({ label, items, isOpen, onClick }) => {
  return (
    <li className="space-y-2">
      <button
        className="text-white w-full text-left hover:bg-neutral-600 p-2 rounded-md flex items-center justify-between bg-neutral-800" // Background for the button
        onClick={onClick}
      >
        {label}
        {/* Display arrow icon based on isOpen */}
        {isOpen ? (
          <FaChevronUp className="text-white" />
        ) : (
          <FaChevronDown className="text-white" />
        )}
      </button>
      {isOpen && (
        <ul className="pl-4 space-y-2 bg-neutral-800 rounded-md"> {/* Background for the dropdown items */}
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:bg-neutral-600 p-2 rounded-md block"
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
  const [openIndex, setOpenIndex] = useState(null); // Keeps track of the open dropdown index

  const menuItems = [
    {
      label: "Slider",
      items: [
        { label: "Create Slider", href: "/admin" },
        { label: "Delete Slider", href: "/admin" },
        { label: "Update Slider", href: "/admin" },
      ],
    },
    {
      label: "Products",
      items: [
        { label: "Create Products", href: "/admin" },
        { label: "Delete Products", href: "/admin" },
        { label: "Update Products", href: "/admin" },
      ],
    },
    {
      label: "About",
      items: [
        { label: "Create About", href: "/admin" },
        { label: "Delete About", href: "/admin" },
        { label: "Update About", href: "/admin" },
      ],
    },
    {
      label: "Contact",
      items: [
        { label: "Create Contact", href: "/admin" },
        { label: "Delete Contact", href: "/admin" },
        { label: "Update Contact", href: "/admin" },
      ],
    },
    {
      label: "Footer",
      items: [
        { label: "Create Footer", href: "/admin" },
        { label: "Delete Footer", href: "/admin" },
        { label: "Update Footer", href: "/admin" },
      ],
    },
  ];

  // Handle the dropdown toggle
  const handleDropdownClick = (index) => {
    // If the same dropdown is clicked, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-neutral-700 w-64 h-full p-6 flex flex-col justify-between">
      <div>
        <h2 className="font-black text-2xl text-white uppercase mb-8">
          Admin Panel
        </h2>
        <ul className="space-y-4">
          {menuItems.map((menuItem, index) => (
            <DropdownMenu
              key={index}
              label={menuItem.label}
              items={menuItem.items}
              isOpen={openIndex === index} // Only open the dropdown with the matching index
              onClick={() => handleDropdownClick(index)} // Toggle dropdown on click
            />
          ))}
        </ul>
      </div>
      <LogoutButton />
    </nav>
  );
};

export default AdminSidebar;
