import { AnimeContext } from "@/interface/interface";
import { createContext, useState, useEffect } from "react";

export const FetchContextAnime = createContext<any>(null);

const useFetchAnime = async (url: string) => {
   const res = await fetch(url);
   const data = await res.json();
   return data;
};

const useFetchAnimeGlobal = async (url: string) => {
   let array: Array<any> = [];
   for (let i = 1; i <= 4; i++) {
      const res = await fetch(url + `?page=${i}`);
      const data = await res.json();
      array = [...array, data];
   }

   const [a, b, c, d] = array;
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
   const [demons, setDemons] = useState<any>({});
   const [ecchi, setEcchi] = useState<any>({});

   const GetAnime = async () => {
      setPopular(
         await useFetchAnimeGlobal("https://gogoanime.consumet.org/popular")
      );

      setAction(
         await useFetchAnimeGlobal(
            "https://gogoanime.consumet.org/genre/action"
         )
      );
      setAventure(
         await useFetchAnimeGlobal(
            "https://gogoanime.consumet.org/genre/adventure"
         )
      );
      setDemons(
         await useFetchAnimeGlobal(
            "https://gogoanime.consumet.org/genre/demons"
         )
      );
      setEcchi(
         await useFetchAnimeGlobal("https://gogoanime.consumet.org/genre/ecchi")
      );
      setTopAiring(
         await useFetchAnimeGlobal("https://gogoanime.consumet.org/top-airing")
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
            demons,
            ecchi,
         }}
      >
         {children}
      </FetchContextAnime.Provider>
   );
};

export default AnimeContext;
