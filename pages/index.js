import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

import { CallToAction } from "@/components/CallToAction";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import heroImage from "@/public/assets/hero2.jpg";
import testimonial1Image from "@/public/assets/testimonial-01.png";
import testimonial2Image from "@/public/assets/testimonial-02.png";

const people = [
  {
    name: "Agathe Gin",
    src: testimonial1Image,
    alt: "Lucille Grilo",
    bio: "Aurore est une vraie amoureuse des animaux. Elle se met toujours à la place des animaux pour comprendre leur comportement afin de nous aider à mieux vivre ensemble. Elle s'adapte à chaque chien pour trouver une solution à nos problèmes. Je recommande les yeux fermés.",
  },
  {
    name: "Lucille Grilo",
    src: testimonial2Image,
    alt: "Lucille Grilo",
    bio: "C’est sans aucun doute la personne que je recommanderai et vers qui je me tournerai pour m’aider à éduquer mon chien tout en me permettant d’apprendre à le connaître pour créer ce lien si particulier qu’on peut avoir avec eux.",
  },
];

const features = [
  {
    name: "Avant l’adoption",
    description:
      "Je vous aide à choisir le bon chien pour votre famille et votre mode de vie.",
  },
  {
    name: "Agility",
    description:
      "Je propose aussi des cours d’initiation à l’agility, de l’apprentissage de tours ou encore de l'obéissance plus poussée.",
  },
  {
    name: "À tout âge",
    description:
      "Tous les chiens peuvent apprendre et sont capables à leur rythme de vivre en harmonie dans leur foyer.",
  },
  {
    name: "Faire connaissance",
    description:
      "Vous avez peur des chiens ? Je propose un service pour vous désensibiliser.",
  },
];

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">
                <span className="block text-brand-600 text-5xl xl:inline">
                  Pawsitive
                </span>{" "}
                <p className="block">
                  le coup de patte <br />
                  pour vivre en harmonie
                </p>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
                Je m’appelle Aurore et vous accompagne avec votre compagnon
                avant ou après l’adoption.
              </p>
              <CallToAction />
            </div>
          </div>
          <div className="relative w-full h-64 overflow-hidden sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              src={heroImage}
              alt="Aurore et ses chiens"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </main>
        <div className="bg-brand-700">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <h2 className="text-3xl text-yellow-400 font-extrabold tracking-tight sm:text-4xl">
                Témoignages
              </h2>

              <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                      <div className="h-0 aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4">
                        <Image
                          src={person.src}
                          className="shadow-lg rounded-lg"
                          alt={person.alt}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg">
                            <p className="text-brand-50">{person.bio}</p>
                          </div>
                          <div className="text-lg text-yellow-400 leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div>
              <h2 className="text-base font-semibold text-brand-600 uppercase tracking-wide">
                Education canine
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Pour tous
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Je vous accompagne à tous les moments de vie de votre compagnon
                !
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-yellow-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 pl-8">
                <Link href="/tarifs">
                  <a className="shadow inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                    Découvre mes offres
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
