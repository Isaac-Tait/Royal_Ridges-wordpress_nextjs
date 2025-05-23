'use client';

import { Disclosure } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Registration', href: '/registration', current: false },
  { name: 'Base Camp', href: '/base-camp', current: false },
  {
    name: 'Recreational Sports Camp',
    href: '/rec-sport-camp',
    current: false,
  },
  {
    name: 'Arts and Crafts Camp',
    href: '/art-craft-camp',
    current: false,
  },
  { name: 'Horse Camp', href: '/horse-camp', current: false },
  { name: 'Adventure Camp', href: '/adventure-camp', current: false },
  { name: 'Paintball Camp', href: '/paintball-camp', current: false },
  {
    name: 'Specialty Horse Camp',
    href: '/specialty-horse-camp',
    current: false,
  },
  {
    name: 'Bus Transportation',
    href: '/bus-transportation',
    current: false,
  },
  { name: 'FAQs', href: '/faq', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SummerNav = () => {
  return (
    <div>
      <Disclosure as='nav'>
        {({ open }) => (
          <div className='flex justify-center'>
            <div className='mt-10'>
              <div className='sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='-ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-800 bg-yellow-400 hover:bg-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white opacity-80'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <p className='font-medium'>Summer Camp Options</p>
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden sm:block sm:ml-6 '>
                  <div className='flex flex-col'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-800 bg-yellow-400 opacity-80 hover:opacity-100 hover:bg-green-200 hover:text-white',
                          'px-3 py-2 my-4 rounded-md text-base font-semibold'
                        )}
                        aria-current={
                          item.current ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-800 bg-yellow-400 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default SummerNav;
