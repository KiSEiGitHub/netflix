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

const useFetchGlobal = async (url: string) => {
   // définit le tableau
   let array: Array<any> = [];

   // la base
   const res = await fetch(url);
   const { results: data } = await res.json();
   data.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   // much
   for (let i = 1; i <= 3; i++) {
      const resM = await fetch(url + `&page=${i}`);
      const { results: dataM } = await resM.json();
      dataM.forEach(
         (o: any) =>
            (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
      );
      array = [...array, dataM];
   }

   array = [...array, data];

   const [a, b, c, d] = array;

   return {
      one: a,
      two: [b, c, d],
   };
};

const ContextFetch = ({ children }: any) => {
   const [pop, setPop] = useState<any>({});
   const [top, setTop] = useState<any>({});
   const [up, setUp] = useState<any>({});

   const GetMovies = async () => {
      setPop(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );

      setTop(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );

      setUp(
         await useFetchGlobal(
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
            pop,
            top,
            up,
         }}
      >
         {children}
      </fetchContext.Provider>
   );
};

export default ContextFetch;
