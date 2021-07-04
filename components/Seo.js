import Head from "next/head";

export const Seo = ({ title }) => {
  const titleContent = title ? `${title} | Pawsitive` : "Pawsitive";

  return (
    <Head>
      <title>{titleContent}</title>
    </Head>
  );
};
