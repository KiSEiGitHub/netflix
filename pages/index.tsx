import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import Top from "@/ui/Top";
import { GetServerSideProps } from "next";

export default function Home({ movies, topMovies, upcoming, muchMovies }: any) {
   return (
      <Layout title='Home'>
         <Section title='Appréciés sur Netflix' fullMovies={muchMovies}>
            <Caroussel arrayFilm={movies} />
         </Section>

         <Section title='Top des films' fullMovies={muchMovies}>
            <Top top={topMovies} />
         </Section>

         <Section title='Upcoming movies' fullMovies={muchMovies}>
            <Caroussel arrayFilm={upcoming} />
         </Section>
      </Layout>
   );
}

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

   // fetch plein de popular films
   let muchMovies: Array<any> = [];
   for (let i = 1; i <= 3; i++) {
      const resPopularMovies = await fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&page=${i}`
      );
      const { results: bcpFilms } = await resPopularMovies.json();
      muchMovies = [...muchMovies, bcpFilms];
   }

   return {
      props: {
         movies: results,
         topMovies: topMovie,
         upcoming: upMovie,
         muchMovies: muchMovies,
      },
   };
};
