import React from 'react';
import Link from 'next/link';
import { HomeIcon, HeartIcon, BellIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

function Navsetfive() {
  return (
    <nav>
      <ul className="flex justify-center gap-24  text-white">
        <li>
          <Link href="/home" className="hover:text-gray-300">
            <HomeIcon className="h-6 w-6" aria-label="Home" />
          </Link>
        </li>
        <li>
          <Link href="/like" className="hover:text-gray-300">
            <HeartIcon className="h-6 w-6" aria-label="Like" />
          </Link>
        </li>
        <li>
          <Link href="/notifications" className="hover:text-gray-300">
            <BellIcon className="h-6 w-6" aria-label="Notifications" />
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-gray-300">
            <ShoppingBagIcon className="h-6 w-6" aria-label="Cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navsetfive;
