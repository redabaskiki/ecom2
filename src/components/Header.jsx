import React, { useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../assets";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount] = useState(0);

  // Toggle profile dropdown
  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // Handle cart click when cart is empty
  const handleCartClick = () => {
    if (cartCount === 0) {
         // Add an item to the cart
      alert("Added item to the cart!");
    }
  };

  return (
    <header
      className="flex items-center justify-between border-b border-stone-200 bg-[radial-gradient(circle,_rgba(238,174,202,1)_0%,_rgba(226,167,228,1)_31%,_rgba(207,178,213,1)_35%,_rgba(202,179,214,1)_40%,_rgba(148,187,233,1)_100%)]
      px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/" className="text-[40px] font-bold">
        Ecom
      </Link>
      <div className="flex items-center">
        {/* Cart Section */}
        <div
          className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
          onClick={handleCartClick}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 p-2 text-l text-white">
              {cartCount}
            </span>
          </div>
          <span className="text-xl font-medium">Cart</span>
        </div>

        {/* Profile Section */}
        <div
          className="relative flex items-center px-4 cursor-pointer hover:bg-gray-100 "
          onClick={handleProfileClick}
        >
          <img src={user} alt="Profile Icon" className="w-8 h-8 rounded-full" />
          <p className="p-2">User</p>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg -bottom-[80px]">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Profile
              </Link>
              <Link
                to="/signout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
