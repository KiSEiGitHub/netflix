import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { results } = await res.json();
   results.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   // get top rated
   const resTop = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { results: topMovie } = await resTop.json();
   topMovie.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   // upcoming movies
   const resUp = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { results: upMovie } = await resUp.json();
   upMovie.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   return {
      props: { movies: results, topMovies: topMovie, upcoming: upMovie },
   };
};
