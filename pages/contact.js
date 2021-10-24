import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import Image from "next/image";

import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import dogsImage from "@/public/assets/dogs.jpg";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <div className="flex-1 relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative h-72 w-full lg:absolute lg:h-full">
                <a
                  href="https://vanessagarciaphotographie.fr"
                  title="Photographe | Vanessa Garcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={dogsImage}
                    alt="Des chiens"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <div className="max-w-lg ml-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Me contacter
                  </h2>
                  <dl className="mt-8 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Adresse</dt>
                      <dd>
                        <p>La Noé blanche 35470</p>
                      </dd>
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Téléphone</dt>
                      <dd className="flex">
                        <PhoneIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          <a
                            href="tel:+33613136212"
                            title="Contacter Pawsitive par téléphone"
                          >
                            +33613136212
                          </a>
                        </span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <MailIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">
                          <a
                            href="mailto:aurore.angevin@hotmail.fr"
                            title="Contacter Pawsitive par courrier électronique"
                          >
                            aurore.angevin@hotmail.fr
                          </a>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
