import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { TierCard } from "@/components/TierCard";

const tiers = [
  {
    name: "Éducation classique",
    priceSession: 40,
    plan: { price: 170, numberOfSession: 5 },
    informations: [
      "1ère séance d’environ 1h30 à domicile pour discuter du chien, des soucis rencontrés.",
      "Séances suivantes à domicile, sur mon terrain ou en extérieur suivant les besoins.",
    ],
  },
  {
    name: "Éducation collective",
    priceSession: 20,
    plan: { price: 85, numberOfSession: 5 },
    informations: ["Séance sur mon terrain ou en extérieur suivant le groupe."],
  },
];

export default function Tarifs() {
  return (
    <>
      <Seo
        title="Tarifs"
        description="Les tarifs de Pawsitive éducation canine"
      />
      <Layout>
        <div className="bg-brand-700">
          <div className="pt-12 sm:pt-16 lg:pt-24">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                <h2 className="text-lg leading-6 font-semibold text-brand-50 uppercase tracking-wider">
                  Mes tarifs
                </h2>
                <p className="text-3xl font-extrabold text-yellow-400 sm:text-4xl lg:text-5xl">
                  Éducation canine à Bain de Bretagne
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div className="relative">
              <div className="absolute inset-0 h-3/4 bg-brand-700" />
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                  {tiers.map((tier) => (
                    <TierCard tier={tier} key={tier.name} />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-brand-600 text-center mt-8">
              Mes autres prestations
            </h3>
            <section>
              <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                  <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <div className="flex-1">
                      <h4 className="inline-flex py-1 text-xl font-bold tracking-wide text-brand-600">
                        Initiation agility / obéissance / tricks
                      </h4>
                      <div className="mt-4 text-lg text-gray-600">
                        Sur mon terrain
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10 lg:flex-shrink-0 flex flex-col items-end">
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        30€
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          par séance
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        <span className="mr-1 text-lg font-medium text-gray-500">
                          Forfait
                        </span>
                        105€
                        <span className="mx-1 text-lg font-medium text-gray-500">
                          pour
                        </span>
                        5
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          séances
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                  <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <div className="flex-1">
                      <h4 className="inline-flex py-1 text-xl font-bold tracking-wide text-brand-600">
                        Balade pour particulier
                      </h4>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10 lg:flex-shrink-0 flex flex-col items-end">
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        20€
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          la balade d&apos;1 heure
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        <span className="mr-1 text-lg font-medium text-gray-500">
                          Forfait
                        </span>
                        50€
                        <span className="mx-1 text-lg font-medium text-gray-500">
                          pour
                        </span>
                        3
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          balade par semaine
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                  <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <div className="flex-1">
                      <h4 className="inline-flex py-1 text-xl font-bold tracking-wide text-brand-600">
                        Désensibilisation aux chiens
                      </h4>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10 lg:flex-shrink-0 flex flex-col items-end">
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        20€
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          par séance
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        <span className="mr-1 text-lg font-medium text-gray-500">
                          Forfait
                        </span>
                        50€
                        <span className="mx-1 text-lg font-medium text-gray-500">
                          pour
                        </span>
                        3
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          séances
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="max-w-md mx-auto lg:max-w-5xl">
                  <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <div className="flex-1">
                      <h4 className="inline-flex py-1 text-xl font-bold tracking-wide text-brand-600">
                        Déplacements
                      </h4>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10 lg:flex-shrink-0 flex flex-col items-end">
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        <span className="mr-1 text-lg font-medium text-gray-500">
                          jusqu’à
                        </span>{" "}
                        25km
                        <span className="ml-1 text-lg font-medium text-gray-500">
                          autours de la Noé Blanche sans frais de déplacement
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline text-xl font-bold">
                        <span className="mr-1 text-lg font-medium text-gray-500">
                          et ensuite
                        </span>
                        1€/km
                        <span className="mx-1 text-lg font-medium text-gray-500">
                          en plus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 relative max-w-md mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                <div className="rounded-md shadow">
                  <Link href="/contact">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                      Contactez-moi
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
