import Image from "next/image";

import { CallToAction } from "@/components/CallToAction";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import searchImage from "@/public/assets/search.jpg";

export default function Custom404() {
  return (
    <>
      <Seo title="404" />
      <Layout>
        <div className="relative bg-white flex-1">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <Image
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={searchImage}
                alt="Un chien qui cherche l'objectif"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-brand-600 font-semibold tracking-wide uppercase">
                  Page non trouvée
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  La page que vous recherchez n'est pas disponible ou n'existe
                  pas sur ce site
                </h3>
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
