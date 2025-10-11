"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CirclePercent,
  MapPin,
  Menu,
  ShoppingCart,
  Truck,
  UserRoundPen,
  ChevronDown,
} from "lucide-react";

const Navigation = () => {
const [openMenu, setOpenMenu] = useState<string | null>(null);

const toggleDropdown = (menu: string) => {
  setOpenMenu(openMenu === menu ? null : menu);
};


  return (
    <div>
      <div className="px-20 py-1 flex justify-between mx-auto bg-gray-300 text-sm">
        <p>Welcome to worldwide Megamart!</p>
        <div className="flex justify-center gap-4">
          <p className="flex items-center gap-1">
            <MapPin className="text-blue-500 w-4 h-4" />
            Deliver to 423651
          </p>
          <p className="flex items-center gap-1">
            <Truck className="text-blue-500 w-4 h-4" />
            Track your order
          </p>
          <p className="flex items-center gap-1">
            <CirclePercent className="text-blue-500 w-4 h-4" />
            All Offers
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mx-auto px-20 py-4 bg-gray-100">
        <div className="flex items-center text-blue-600">
          <Menu size={40} />
          <p className="text-3xl font-semibold mx-4">MegaMart</p>
        </div>

        <div className="w-1/2">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex items-center">
          <UserRoundPen className="text-blue-500 mx-1" />
          <p className="font-bold">Sign Up / Sign In</p>
          <p className="mx-6 text-gray-400">|</p>
          <ShoppingCart className="text-blue-500 mx-1" />
          <p className="font-bold">Cart</p>
        </div>
      </div>

      <nav className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-10 py-3">
          <ul className="hidden md:flex space-x-8 font-medium text-gray-800 dark:text-gray-200">
            {/* Home */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("home")}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Home <ChevronDown size={16} />
              </button>
              {openMenu === "home" && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Overview
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Updates
                  </Link>
                </div>
              )}
            </li>


            <li className="relative">
              <button
                onClick={() => toggleDropdown("categories")}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Categories <ChevronDown size={16} />
              </button>
              {openMenu === "categories" && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Electronics
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Fashion
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Furniture
                  </Link>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Services <ChevronDown size={16} />
              </button>
              {openMenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Customer Support
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Shipping
                  </Link>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown("offers")}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Offers <ChevronDown size={16} />
              </button>
              {openMenu === "offers" && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Flash Sale
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Coupons
                  </Link>
                </div>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown("contact")}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Contact <ChevronDown size={16} />
              </button>
              {openMenu === "contact" && (
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Email
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Phone
                  </Link>
                </div>
              )}
            </li>
          </ul>

          <button
            onClick={() => toggleDropdown("mobile")}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            ☰
          </button>
        </div>

        {openMenu === "mobile" && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 px-6 py-3 space-y-3">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Services</Link>
            <Link href="#">Offers</Link>
            <Link href="#">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
