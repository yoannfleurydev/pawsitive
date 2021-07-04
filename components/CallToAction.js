import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <Link href="/tarifs">
          <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
            Mes offres
          </a>
        </Link>
      </div>
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <Link href="/contact">
          <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-50 md:py-4 md:text-lg md:px-10">
            Contactez moi
          </a>
        </Link>
      </div>
    </div>
  );
};
