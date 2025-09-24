'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  const isHome = pathname === '/';

  return (
    <div
      data-nav='v2'
      className='sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'
    >
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              {/* 🔁 CHANGED: flex → grid so the center stays centered */}
              <div className='grid h-16 grid-cols-3 items-center'>
                {/* Left: logo (only on non-home). No spacer needed. */}
                {!isHome ? (
                  <Link
                    href='/'
                    className='col-start-1 justify-self-start shrink-0'
                    aria-label='Royal Ridges Home'
                  >
                    <Image
                      src='/images/logo.png'
                      alt='Royal Ridges'
                      width={160}
                      height={40}
                      priority
                      className='h-10 w-auto'
                    />
                  </Link>
                ) : (
                  <div className='col-start-1' aria-hidden='true' />
                )}

                {/* Desktop nav */}
                <div className='col-start-2 hidden sm:block justify-self-center'>
                  <div className='flex items-center gap-1 md:gap-2 lg:gap-3'>
                    {NAV.map((item) => {
                      const active = isActive(item.href, pathname);
                      const base =
                        // smaller text & padding on small desktops, scale up with width
                        'px-2 md:px-3 py-2 rounded-lg text-xs md:text-sm font-semibold ' +
                        'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ' +
                        'whitespace-nowrap'; // 👈 keep labels on one line

                      const state = active
                        ? 'bg-emerald-700 text-white'
                        : 'text-zinc-800 hover:bg-emerald-600 hover:text-white';

                      return item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`${base} ${state}`}
                          aria-current={active ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${base} ${state}`}
                          aria-current={active ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right: mobile toggle (only visible on small screens) */}
                <div className='col-start-3 flex justify-end sm:hidden'>
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
              </div>
            </div>

            {/* Mobile panel */}
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
