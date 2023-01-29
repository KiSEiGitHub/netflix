import Layout from "@/ui/Layout";
import SkeletonHome from "@/ui/skeleton/home";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function AnimeId({ anime }: any) {
   const [load, setLoad] = useState<boolean>(true);

   useEffect(() => {
      if (anime) {
         setLoad(false);
      }
   }, [anime]);

   if (load) {
      return <SkeletonHome />;
   }

   console.log(anime);

   return (
      <Layout title={anime.title.romaji}>
         <Flex
            h='auto'
            bg={`rgba(0, 0, 0, 0.1) url(${anime.cover})`}
            w='100%'
            bgRepeat='no-repeat'
            borderRadius='lg'
            bgSize='cover'
            alignItems='center'
            bgAttachment='fixed'
            mt={4}
         >
            <Box maxW='600px'>
               <Heading variant='Netflix'>{anime.title.romaji}</Heading>
               <Text textAlign='justify' variant='Para' mt={4}>
                  {anime.description}
               </Text>
            </Box>
         </Flex>
         <Box w='100%'>
            <Heading>Episodes</Heading>
            {anime.episodes.map((item: any, key: number) => (
               <Box key={key}>
                  <Text>{item.title}</Text>
               </Box>
            ))}
         </Box>
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;
   const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
   });
   const data = await res.json();

   return {
      props: { anime: data },
   };
};
