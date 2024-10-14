'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProfileNav({ username }: { username: string }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 mt-4 flex w-full max-w-[430px] justify-start bg-white py-2 pl-6">
      <Link
        href={`/${username}`}
        className={
          pathname === `/${username}`
            ? 'text-xl font-bold text-purple-600'
            : 'text-gray-500'
        }
      >
        Posts
      </Link>
    </nav>
  );
}
