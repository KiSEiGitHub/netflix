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
      }, 1500);
   }, []);

   if (load) {
      return <SkeletonHome />;
   }
   return (
      <Layout title='Movies'>
         <Box
            w='100%'
            h='auto'
            bg='dark.primary'
            pos='sticky'
            top={0}
            zIndex={2}
            pb={3}
         >
            <Heading variant='Title' pt={2}>
               Movies
            </Heading>
            <HStack mt={3} spacing={2}>
               {genres.map((item: any, key: number) => (
                  <Tag key={key}>
                     <Link href={`/genre/${item.id}`}>{item.name}</Link>
                  </Tag>
               ))}
            </HStack>
         </Box>
         {!load && (
            <>
               <Section title='Action' fullMovies={action.two}>
                  <Caroussel arrayFilm={action.one} />
               </Section>

               <Section title='Aventure' fullMovies={aventure.two}>
                  <Caroussel arrayFilm={aventure.one} />
               </Section>

               <Section title='Horror' fullMovies={horror.two}>
                  <Caroussel arrayFilm={horror.one} />
               </Section>

               <Section title='Animation' fullMovies={animation.two}>
                  <Caroussel arrayFilm={animation.one} />
               </Section>

               <Section title='Fantasy' fullMovies={fantasy.two}>
                  <Caroussel arrayFilm={fantasy.one} />
               </Section>
            </>
         )}
      </Layout>
   );
}

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
