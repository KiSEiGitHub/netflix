import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import Top from "@/ui/Top";
import { getServerSideProps } from "./ssr/getMovies";

export default function Home({ movies, topMovies, upcoming }: any) {
   return (
      <Layout title='Home'>
         <Section title='Appréciés sur Netflix'>
            <Caroussel arrayFilm={movies} />
         </Section>

         <Section title='Top des films'>
            <Top top={topMovies} />
         </Section>

         <Section title='Upcoming movies'>
            <Caroussel arrayFilm={upcoming} />
         </Section>
      </Layout>
   );
}

export { getServerSideProps };
