import GenreAnimeNav from "@/components/GenreAnimeNav";
import { FetchContextAnime } from "@/context/fetchContextAnime";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import SkeletonHome from "@/ui/skeleton/home";
import { useContext, useEffect, useState } from "react";

export default function Animes() {
   const [load, setload] = useState(true);
   const { popular, action, aventure, mecha } = useContext(FetchContextAnime);
   console.log(mecha);

   useEffect(() => {
      if (Object.keys(popular).length > 0 && popular.constructor === Object) {
         if (Object.keys(action).length > 0 && action.constructor === Object) {
            if (
               Object.keys(aventure).length > 0 &&
               aventure.constructor === Object
            ) {
               if (
                  Object.keys(mecha).length > 0 &&
                  mecha.constructor === Object
               ) {
                  setload(false);
               }
            }
         }
      }
   }, [popular, action, aventure, mecha]);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title='Animes'>
         <GenreAnimeNav title='Anime' />
         <Section title='Anime populaire' id='animes' fullMovies={popular.two}>
            <Caroussel arrayFilm={popular.one} id='animes' />
         </Section>

         <Section title="Anime d'action" id='animes' fullMovies={action.two}>
            <Caroussel arrayFilm={action.one} id='animes' />
         </Section>

         <Section
            title="Anime d'aventure"
            id='animes'
            fullMovies={aventure.two}
         >
            <Caroussel arrayFilm={aventure.one} id='animes' />
         </Section>

         <Section title='Anime mecha' id='animes' fullMovies={mecha.two}>
            <Caroussel arrayFilm={mecha.one} id='animes' />
         </Section>
      </Layout>
   );
}
