import GenreNav from "@/components/GenreNav";
import Layout from "@/ui/Layout";
import SkeletonHome from "@/ui/skeleton/home";
import { Box, Flex, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function MovieByGenre({ movie, genre }: any) {
   const [load, setLoad] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         setLoad(false);
      }, 2000);
   }, []);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title={genre[0].name}>
         <GenreNav title={genre[0].name} />
         <Flex flexWrap='wrap' justifyContent='space-between' gap={4} mt={4}>
            {movie.map((item: any, key: number) => (
               <Box key={key}>
                  <Image
                     alt='ok'
                     src={item.img}
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
               </Box>
            ))}
         </Flex>
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { movieId } = ctx.query;

   const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c0709bffe7e128b8e1689258de71904c&with_genres=${movieId}&page=1`
   );

   const { results } = await res.json();

   results.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   const resGenre = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c0709bffe7e128b8e1689258de71904c"
   );

   const data = await resGenre.json();

   const genre = data.genres.filter((word: any) => word.id == movieId);

   return {
      props: {
         movie: results,
         genre: genre,
      },
   };
};
