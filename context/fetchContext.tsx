import { createContext, useEffect, useState } from "react";

export const fetchContext = createContext<any>(null);

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
   const [tv, setTv] = useState<any>({});

   const [action, setAction] = useState<any>({});
   const [aventure, setAventure] = useState<any>({});
   const [horror, setHorror] = useState<any>({});
   const [animation, setAnimation] = useState<any>({});
   const [fantasy, setFantasy] = useState<any>({});

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

      setTv(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
         )
      );

      setAction(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&with_genres=28`
         )
      );

      setAventure(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&with_genres=12`
         )
      );

      setHorror(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&with_genres=27`
         )
      );

      setAnimation(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&with_genres=16`
         )
      );

      setFantasy(
         await useFetchGlobal(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}&with_genres=14`
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
            tv,
            action,
            aventure,
            horror,
            animation,
            fantasy,
         }}
      >
         {children}
      </fetchContext.Provider>
   );
};

export default ContextFetch;
