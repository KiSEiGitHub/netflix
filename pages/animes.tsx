import { fetchContext } from "@/context/fetchContext";
import { FetchContextAnime } from "@/context/fetchContextAnime";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import SkeletonHome from "@/ui/skeleton/home";
import Top from "@/ui/Top";
import { useContext, useEffect, useState } from "react";

export default function Animes() {
   const [load, setload] = useState(true);
   const { popular } = useContext(FetchContextAnime);
   const { topAiring } = useContext(FetchContextAnime);
   const { action } = useContext(FetchContextAnime);
   const { aventure } = useContext(FetchContextAnime);
   const { demons } = useContext(FetchContextAnime);
   const { ecchi } = useContext(FetchContextAnime);
   const { pop } = useContext(fetchContext);

   useEffect(() => {
      setTimeout(() => {
         setload(false);
      }, 2000);
   }, []);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title='Animes'>
         <Section title='Anime populaire' fullMovies={pop.two}>
            <Caroussel arrayFilm={popular} id={2} />
         </Section>
         <Section title='Anime du moment' fullMovies={pop.two}>
            <Top top={topAiring} id={2} />
         </Section>
         <Section title='Action' fullMovies={pop.two}>
            <Caroussel arrayFilm={action} id={2} />
         </Section>
         <Section title='Aventure' fullMovies={pop.two}>
            <Caroussel arrayFilm={aventure} id={2} />
         </Section>
         <Section title='Demons' fullMovies={pop.two}>
            <Caroussel arrayFilm={demons} id={2} />
         </Section>
         <Section title='Ecchi' fullMovies={pop.two}>
            <Caroussel arrayFilm={ecchi} id={2} />
         </Section>
      </Layout>
   );
}
