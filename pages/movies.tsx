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

   const { pop } = useContext(fetchContext);
   const { top } = useContext(fetchContext);
   const { up } = useContext(fetchContext);
   const { tv } = useContext(fetchContext);

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
               <Section title='Appréciés sur Netflix' fullMovies={pop.two}>
                  <Caroussel arrayFilm={pop.one} />
               </Section>
               <Section title='Top des films' fullMovies={top.two}>
                  <Top top={top.one} />
               </Section>

               <Section title='Upcoming movies' fullMovies={up.two}>
                  <Caroussel arrayFilm={up.one} />
               </Section>

               <Section title='Séries TV' fullMovies={tv.two}>
                  <Caroussel arrayFilm={tv.one} />
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
