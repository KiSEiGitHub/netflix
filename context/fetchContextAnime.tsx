import { AnimeContext } from "@/interface/interface";
import { createContext, useState, useEffect } from "react";

export const FetchContextAnime = createContext<any>(null);

const useFetchGenre = async (url: string, genre: string) => {
   let array: Array<any> = [];
   for (let i = 1; i <= 5; i++) {
      const res = await fetch(url + `?genres=["${genre}"]&page=${i}`);
      const { results } = await res.json();
      array = [...array, results];
   }

   const [a, b, c, d, e] = array;

   return {
      one: a,
      two: [b, c, d],
   };
};

const useFetch = async (url: string) => {
   let array: Array<any> = [];
   for (let i = 1; i <= 5; i++) {
      const res = await fetch(url + `?page=${i}`);
      const { results } = await res.json();
      array = [...array, results];
   }

   const [a, b, c, d, e] = array;

   return {
      one: a,
      two: [b, c, d],
   };
};

const AnimeContext = ({ children }: AnimeContext) => {
   const [popular, setPopular] = useState<any>({});
   const [topAiring, setTopAiring] = useState<any>({});
   const [action, setAction] = useState<any>({});
   const [aventure, setAventure] = useState<any>({});
   const [mecha, setMecha] = useState<any>({});

   const GetAnime = async () => {
      setPopular(
         await useFetch("https://api.consumet.org/meta/anilist/popular")
      );

      setAction(
         await useFetchGenre(
            "https://api.consumet.org/meta/anilist/genre",
            "Action"
         )
      );

      setAventure(
         await useFetchGenre(
            "https://api.consumet.org/meta/anilist/genre",
            "Adventure"
         )
      );

      setMecha(
         await useFetchGenre(
            "https://api.consumet.org/meta/anilist/genre",
            "Mecha"
         )
      );
   };

   useEffect(() => {
      GetAnime();
   }, []);

   return (
      <FetchContextAnime.Provider
         value={{
            popular,
            topAiring,
            action,
            aventure,
            mecha,
         }}
      >
         {children}
      </FetchContextAnime.Provider>
   );
};

export default AnimeContext;
