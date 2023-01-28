import GenreAnimeNav from "@/components/GenreAnimeNav";
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

   useEffect(() => {
      if (Object.keys(popular).length > 0 && popular.constructor === Object) {
         if (
            Object.keys(aventure).length > 0 &&
            aventure.constructor === Object
         ) {
            if (
               Object.keys(demons).length > 0 &&
               demons.constructor === Object
            ) {
               if (
                  Object.keys(ecchi).length > 0 &&
                  ecchi.constructor === Object
               ) {
                  if (
                     Object.keys(action).length > 0 &&
                     action.constructor === Object
                  ) {
                     if (
                        Object.keys(topAiring).length > 0 &&
                        topAiring.constructor === Object
                     ) {
                        setload(false);
                     }
                  }
               }
            }
         }
      }
   }, [popular, aventure, demons, ecchi, action, topAiring]);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title='Animes'>
         <GenreAnimeNav title='Anime' />
         <Section title='Animes populaire' fullMovies={popular.two} id='animes'>
            <Caroussel arrayFilm={popular.one} id='animes' />
         </Section>
         <Section
            title='Anime du moment'
            fullMovies={topAiring.two}
            id='animes'
         >
            <Top top={topAiring.one} id={2} />
         </Section>
         <Section title='Aventure' fullMovies={aventure.two} id='animes'>
            <Caroussel arrayFilm={aventure.one} id='animes' />
         </Section>
         <Section title='Action' fullMovies={action.two} id='animes'>
            <Caroussel arrayFilm={action.one} id='animes' />
         </Section>
         <Section title='Demons' fullMovies={demons.two} id='animes'>
            <Caroussel arrayFilm={demons.one} id='animes' />
         </Section>
         <Section title='Ecchi' fullMovies={ecchi.two} id='animes'>
            <Caroussel arrayFilm={ecchi.one} id='animes' />
         </Section>
      </Layout>
   );
}
