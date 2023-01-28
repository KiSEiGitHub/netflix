import Layout from "@/ui/Layout";
import SkeletonHome from "@/ui/skeleton/home";
import { Box, Image } from "@chakra-ui/react";
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
         <Image src={anime.image} alt='ok' />
         <Image src={anime.cover} alt='ok' />
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;
   const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`);
   const data = await res.json();

   return {
      props: { anime: data },
   };
};
