import { fetchContext } from "@/context/fetchContext";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import SkeletonHome from "@/ui/skeleton/home";
import { useContext, useEffect, useState } from "react";

export default function Movies({ genres }: any) {
   const [load, setload] = useState(true);

   const { action } = useContext(fetchContext);
   const { aventure } = useContext(fetchContext);
   const { horror } = useContext(fetchContext);
   const { animation } = useContext(fetchContext);
   const { fantasy } = useContext(fetchContext);

   useEffect(() => {
      if (Object.keys(action).length > 0 && action.constructor === Object) {
         if (
            Object.keys(aventure).length > 0 &&
            aventure.constructor === Object
         ) {
            if (
               Object.keys(horror).length > 0 &&
               horror.constructor === Object
            ) {
               if (
                  Object.keys(animation).length > 0 &&
                  animation.constructor === Object
               ) {
                  if (
                     Object.keys(fantasy).length > 0 &&
                     fantasy.constructor === Object
                  ) {
                     setload(false);
                  }
               }
            }
         }
      }
   }, [action, aventure, horror, animation, fantasy]);

   if (load) {
      return <SkeletonHome />;
   }
   return (
      <Layout title='Movies'>
         <GenreNav title='Movies' />
         {!load && (
            <>
               <Section title='Action' fullMovies={action.two} id='movies'>
                  <Caroussel arrayFilm={action.one} id='movies' />
               </Section>

               <Section title='Aventure' fullMovies={aventure.two} id='movies'>
                  <Caroussel arrayFilm={aventure.one} id='movies' />
               </Section>

               <Section title='Horror' fullMovies={horror.two} id='movies'>
                  <Caroussel arrayFilm={horror.one} id='movies' />
               </Section>

               <Section
                  title='Animation'
                  fullMovies={animation.two}
                  id='movies'
               >
                  <Caroussel arrayFilm={animation.one} id='movies' />
               </Section>

               <Section title='Fantasy' fullMovies={fantasy.two} id='movies'>
                  <Caroussel arrayFilm={fantasy.one} id='movies' />
               </Section>
            </>
         )}
      </Layout>
   );
}

import GenreNav from "@/components/GenreNav";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { genres } = await res.json();

   return {
      props: {
         genres: genres,
      },
   };
};
