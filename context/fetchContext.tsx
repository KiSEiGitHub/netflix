import { createContext, useEffect, useState } from "react";

export const fetchContext = createContext<any>(null);

const useFetch = async (url: string) => {
   const res = await fetch(url);
   const { results: data } = await res.json();
   data.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   return data;
};

const useFetchMuch = async (url: string) => {
   let array: Array<any> = [];
   for (let i = 1; i <= 3; i++) {
      const res = await fetch(url + `&page=${i}`);
      const { results } = await res.json();
      results.forEach(
         (o: any) =>
            (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
      );

      array = [...array, results];
   }

   return array;
};

const ContextFetch = ({ children }: any) => {
   const [popular, setPopular] = useState<Array<any>>([]);
   const [topRated, setTopRated] = useState<Array<any>>([]);
   const [upComming, setUpComming] = useState<Array<any>>([]);
   const [muchPopular, setMuchPopular] = useState<Array<any>>([]);
   const [muchTopRated, setMuchTopRated] = useState<Array<any>>([]);
   const [muchUpComming, setMuchUpComming] = useState<Array<any>>([]);

   const GetMovies = async () => {
      setMuchUpComming(
         await useFetchMuch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );
      setMuchPopular(
         await useFetchMuch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );
      setMuchTopRated(
         await useFetchMuch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );
      setPopular(
         await useFetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );

      setTopRated(
         await useFetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );

      setUpComming(
         await useFetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );
   };

   useEffect(() => {
      GetMovies();
   }, []);

   return (
      <fetchContext.Provider
         value={{
            popular,
            topRated,
            upComming,
            muchPopular,
            muchTopRated,
            muchUpComming,
         }}
      >
         {children}
      </fetchContext.Provider>
   );
};

export default ContextFetch;
