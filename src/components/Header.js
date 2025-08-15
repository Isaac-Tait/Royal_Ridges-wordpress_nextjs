'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NAV from '@/config/nav';

const cx = (...c) => c.filter(Boolean).join(' ');
const isActive = (href, pathname) =>
  href.startsWith('/') &&
  (pathname === href || pathname.startsWith(href + '/'));

export default function Header() {
  const { pathname } = useRouter();

  return (
    <div
      data-nav='v2'
      className='sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'
    >
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                <Link
                  href='/'
                  className='font-cursive text-2xl font-bold text-emerald-700 tracking-wide'
                >
                  Royal Ridges
                </Link>

                <div className='flex sm:hidden'>
                  <Disclosure.Button
                    className='inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-emerald-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500'
                    aria-label={open ? 'Close menu' : 'Open menu'}
                  >
                    {open ? (
                      <XMarkIcon className='h-6 w-6' />
                    ) : (
                      <Bars3Icon className='h-6 w-6' />
                    )}
                  </Disclosure.Button>
                </div>

                <div className='hidden sm:block'>
                  <div className='flex items-center gap-2'>
                    {NAV.map((item) => {
                      const active = isActive(item.href, pathname);
                      const base =
                        'px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';
                      const state = active
                        ? 'bg-emerald-700 text-white'
                        : 'text-zinc-800 hover:bg-emerald-600 hover:text-white';

                      return item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={cx(base, state)}
                          aria-current={active ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ) : (
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
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-4 pb-4 pt-2'>
                {NAV.map((item) => {
                  const active = isActive(item.href, pathname);
                  const base =
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500';
                  const state = active
                    ? 'bg-emerald-700 text-white'
                    : 'text-zinc-800 hover:bg-emerald-600 hover:text-white';

                  return item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={cx(base, state)}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ) : (
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
