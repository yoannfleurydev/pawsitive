import Head from "next/head";

import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Seo title="Mentions Légales" />
      <Layout>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-xl m-auto">
            <div className="text-lg max-w-prose mx-auto">
              <h2 className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Mentions Légales
              </h2>
            </div>
            <section>
              <h3>Propriétaire</h3>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  Le site pawsitive-education.fr est édité par le{" "}
                  <a
                    href="https://www.bearstudio.fr"
                    title="Page d'accueil du BearStudio, studio d'accompagnement pour porteurs et porteuses de projet dans le numérique"
                  >
                    BearStudio
                  </a>
                  , SAS au capital social de 10 000 €
                </p>
                <p>
                  Inscrit au registre du commerce et des sociétés sous le numéro
                  SIRET 89058657100014
                </p>
                <p>dont le siège social se situe à La Noé blanche 35470.</p>
                <p>
                  Téléphone : 06 13 13 62 12 Mail : aurore.angevin@hotmail.fr
                </p>
              </div>
            </section>
            <section className="mt-8">
              <h3>Hébergeur</h3>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                  pawsitive-education.fr est hébergé par Vercel Inc., dont le
                  siège social se situe au 340 S Lemon Ave #4133 Walnut, CA
                  91789
                </p>
                <p>Site Internet : vercel.com</p>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
