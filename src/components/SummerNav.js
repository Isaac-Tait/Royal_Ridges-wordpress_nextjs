// src/components/SummerNav.js
'use client';

import Link from 'next/link';
import { useRouter } from 'next/router'; // If you're on the App Router, swap to: import { usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SUMMER_NAV from '@/config/summerNav';

const cx = (...c) => c.filter(Boolean).join(' ');

// For Pages Router:
const usePath = () => {
  const { pathname } = useRouter();
  return pathname;
};
// For App Router, replace the two lines above with:
// const usePath = () => usePathname();

const isActive = (href, pathname) =>
  href.startsWith('/') &&
  (pathname === href || pathname.startsWith(href + '/'));

export default function SummerNav() {
  const pathname = usePath();

  return (
    <div className='flex justify-center'>
      <Disclosure as='nav' className='w-full'>
        {({ open }) => (
          <>
            {/* Mobile toggle */}
            <div className='mt-10 sm:hidden flex justify-center'>
              <Disclosure.Button
                className='inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-semibold text-zinc-800 bg-yellow-400/90 hover:bg-emerald-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500'
                aria-label={
                  open
                    ? 'Close summer camp menu'
                    : 'Open summer camp menu'
                }
              >
                {open ? (
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                ) : (
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                )}
                <span>Summer Camp Options</span>
              </Disclosure.Button>
            </div>

            {/* Desktop vertical list */}
            <div className='mt-10 hidden sm:flex w-full items-center justify-center'>
              <div className='sm:ml-6'>
                <div className='flex flex-col'>
                  {SUMMER_NAV.map((item) => {
                    const active = isActive(item.href, pathname);
                    const base =
                      'px-3 py-2 my-3 rounded-lg text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';
                    const state = active
                      ? 'bg-emerald-700 text-white'
                      : 'text-zinc-800 bg-yellow-400/90 hover:bg-emerald-600 hover:text-white';
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cx(base, state)}
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile panel */}
            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-4 pb-4 pt-2'>
                {SUMMER_NAV.map((item) => {
                  const active = isActive(item.href, pathname);
                  const base =
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';
                  const state = active
                    ? 'bg-emerald-700 text-white'
                    : 'text-zinc-800 bg-yellow-400/90 hover:bg-emerald-600 hover:text-white';
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={cx(base, state)}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
