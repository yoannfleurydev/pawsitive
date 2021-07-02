import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components/Nav";
import heroImage from "../public/assets/hero.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">
              <span className="block text-brand-600 xl:inline">Pawsitive</span>{" "}
              <p className="block">
                le coup de patte <br />
                pour vivre en harmonie
              </p>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
              Je m’appelle Aurore et vous accompagne avec votre compagnon avant
              ou après l’adoption.
            </p>
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
          </div>
        </div>
        <div className="relative w-full h-64 overflow-hidden sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            src={heroImage}
            alt="Aurore et ses chiens"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
