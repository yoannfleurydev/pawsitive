/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({
  href,
  className,
  inactiveClass,
  activeClass,
  ...rest
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${className} ${isActive ? activeClass : inactiveClass}`}
        {...rest}
      />
    </Link>
  );
};

export function Nav() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <Logo className="text-brand-600 w-16" />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-brand-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <ActiveLink
                    href="/"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    activeClass="border-brand-500 text-gray-900"
                  >
                    Accueil
                  </ActiveLink>
                  <ActiveLink
                    href="/tarifs"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    activeClass="border-brand-500 text-gray-900"
                  >
                    Tarifs
                  </ActiveLink>
                  <ActiveLink
                    href="/contact"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    activeClass="border-brand-500 text-gray-900"
                  >
                    Contactez-moi
                  </ActiveLink>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <a
                  href="tel:+33606060606"
                  className="text-brand-600 inline-flex items-center"
                >
                  <PhoneIcon className="w-4 h-4 text-yellow-400 mr-2" />
                  06 06 06 06 06
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-brand-50 border-brand-500 text-brand-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <ActiveLink
                href="/"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                inactiveClass="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                activeClass="bg-brand-50 border-brand-500 text-brand-700"
              >
                Accueil
              </ActiveLink>
              <ActiveLink
                href="/tarifs"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                inactiveClass="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                activeClass="bg-brand-50 border-brand-500 text-brand-700"
              >
                Tarifs
              </ActiveLink>
              <ActiveLink
                href="/contact"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                inactiveClass="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                activeClass="bg-brand-50 border-brand-500 text-brand-700"
              >
                Contactez-moi
              </ActiveLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <a
                  href="tel:+33606060606"
                  className="text-brand-600 inline-flex items-center"
                >
                  <PhoneIcon className="w-4 h-4 text-yellow-400 mr-2" />
                  06 06 06 06 06
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
