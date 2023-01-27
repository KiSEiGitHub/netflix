import { fetchContext } from "@/context/fetchContext";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import Top from "@/ui/Top";
import { useContext } from "react";

export default function Home() {
   const { popular } = useContext(fetchContext);
   const { topRated } = useContext(fetchContext);
   const { upComming } = useContext(fetchContext);
   const { muchPopular } = useContext(fetchContext);
   const { muchTopRated } = useContext(fetchContext);
   const { muchUpComming } = useContext(fetchContext);

   return (
      <Layout title='Home'>
         <Section title='Appréciés sur Netflix' fullMovies={muchPopular}>
            <Caroussel arrayFilm={popular} />
         </Section>

         <Section title='Top des films' fullMovies={muchTopRated}>
            <Top top={topRated} />
         </Section>

         <Section title='Upcoming movies' fullMovies={muchUpComming}>
            <Caroussel arrayFilm={upComming} />
         </Section>
      </Layout>
   );
}
