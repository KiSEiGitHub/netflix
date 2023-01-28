import GenreAnimeNav from "@/components/GenreAnimeNav";
import Layout from "@/ui/Layout";
import SkeletonHome from "@/ui/skeleton/home";
import { Flex, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function AnimeId({ anime, slug }: any) {
   const [load, setLoad] = useState<boolean>(true);

   useEffect(() => {
      if (anime.length > 0) {
         setLoad(false);
      }
   }, [anime]);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title={slug}>
         <GenreAnimeNav title={slug} />
         <Flex flexWrap='wrap' gap={4} justifyContent='space-between' mt={4}>
            {anime.map((item: any, key: number) => (
               <Image
                  key={key}
                  alt='ok'
                  src={item.animeImg}
                  w='350px'
                  h={{
                     sm: "175px",
                     md: "250px",
                     lg: "350px",
                     xl: "430px",
                     "2xl": "600px",
                  }}
                  objectFit='cover'
                  borderRadius='lg'
                  _hover={{ transform: "scale(0.98)" }}
                  transition='0.3s'
               />
            ))}
         </Flex>
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;
   const res = await fetch(`https://gogoanime.consumet.org/genre/${id}`);
   const data = await res.json();

   return {
      props: {
         anime: data,
         slug: id,
      },
   };
};
