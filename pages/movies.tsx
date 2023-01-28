import { fetchContext } from "@/context/fetchContext";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import SkeletonHome from "@/ui/skeleton/home";
import Top from "@/ui/Top";
import { Box, Heading, HStack, Link, Tag } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

export default function Movies({ genres }: any) {
   const [load, setload] = useState(true);

   const { action } = useContext(fetchContext);
   const { aventure } = useContext(fetchContext);
   const { horror } = useContext(fetchContext);
   const { animation } = useContext(fetchContext);
   const { fantasy } = useContext(fetchContext);

   useEffect(() => {
      setTimeout(() => {
         setload(false);
      }, 2000);
   }, []);

   if (load) {
      return <SkeletonHome />;
   }
   return (
      <Layout title='Movies'>
         <GenreNav title='Movies' />
         {!load && (
            <>
               <Section title='Action' fullMovies={action.two}>
                  <Caroussel arrayFilm={action.one} id={1} />
               </Section>

               <Section title='Aventure' fullMovies={aventure.two}>
                  <Caroussel arrayFilm={aventure.one} id={1} />
               </Section>

               <Section title='Horror' fullMovies={horror.two}>
                  <Caroussel arrayFilm={horror.one} id={1} />
               </Section>

               <Section title='Animation' fullMovies={animation.two}>
                  <Caroussel arrayFilm={animation.one} id={1} />
               </Section>

               <Section title='Fantasy' fullMovies={fantasy.two}>
                  <Caroussel arrayFilm={fantasy.one} id={1} />
               </Section>
            </>
         )}
      </Layout>
   );
}

import { GetServerSideProps } from "next";
import GenreNav from "@/components/GenreNav";

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
