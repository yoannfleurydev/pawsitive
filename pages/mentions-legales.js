import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

export default function MentionsLegales() {
  return (
    <>
      <Seo title="Mentions Légales" />
      <Layout>
        <h2 className="text-4xl font-bold text-brand-600 text-center mt-8">
          Mentions Légales
        </h2>
        <section>
          <h3>Propriétaire</h3>
          <p>
            Le site TODO est édité par le BearStudio, SAS au capital social de
            10 000 €
          </p>
          <p>
            Inscrit au registre du commerce et des sociétés sous le numéro SIRET
            TODO
          </p>
          <p>dont le siège social se situe au TODO.</p>
          <p>Téléphone : 06 13 13 62 12 Mail : aurore.angevin@hotmail.fr</p>
        </section>
        <section>
          <h3>Hébergeur</h3>
          <p>
            TODO est hébergé par Vercel Inc., dont le siège social se situe au
            340 S Lemon Ave #4133 Walnut, CA 91789
          </p>
          <p>Site Internet : vercel.com</p>
        </section>
      </Layout>
    </>
  );
}
