import Head from "next/head";

const defaultDescription =
  "Pawsitive, éducation canine près de Bain de Bretagne";

export const Seo = ({ title, description = defaultDescription }) => {
  const titleContent = title ? `${title} | Pawsitive` : "Pawsitive";

  return (
    <Head>
      <title>{titleContent}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
