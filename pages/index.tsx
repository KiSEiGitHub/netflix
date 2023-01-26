import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import Top from "@/ui/Top";
import { getServerSideProps } from "./ssr/getMovies";

export default function Home({ movies }: any) {
  console.log(movies);

  return (
    <Layout title="Home">
      <Section title="Appréciés sur Netflix">
        <Caroussel />
      </Section>

      <Section title="Tendances actuelless">
        <Caroussel />
      </Section>

      <Section title="Top 10 des séries aujourd'hui : France">
        <Top />
      </Section>

      <Section title="Séries internationales">
        <Caroussel />
      </Section>

      <Section title="Séries japonaise">
        <Caroussel />
      </Section>

      <Section title="Revoir">
        <Caroussel />
      </Section>

      <Section title="Nouveautés">
        <Caroussel />
      </Section>
    </Layout>
  );
}

export { getServerSideProps };
