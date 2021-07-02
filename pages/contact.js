import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import dogsImage from "../public/assets/dogs.jpg";

/* This example requires Tailwind CSS v2.0+ */

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Pawsitive</title>
      </Head>
      <Layout>
        <div className="flex-1 relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative h-72 w-full lg:absolute lg:h-full">
                <Image
                  src={dogsImage}
                  alt="Des chiens"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-500">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p>
                  <dl className="mt-8 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Postal address</dt>
                      <dd>
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                      </dd>
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <PhoneIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">+1 (555) 123-4567</span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <MailIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">support@example.com</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-6 text-base text-gray-500">
                    Looking for careers?{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      View all job openings
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
