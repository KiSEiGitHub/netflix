import { AnimeContext } from "@/interface/interface";
import { createContext, useState, useEffect } from "react";

export const FetchContextAnime = createContext<any>(null);

const useFetchAnime = async (url: string) => {
   const res = await fetch(url);
   const data = await res.json();
   return data;
};

const AnimeContext = ({ children }: AnimeContext) => {
   const [popular, setPopular] = useState<Array<any>>([]);
   const [topAiring, setTopAiring] = useState<Array<any>>([]);
   const [action, setAction] = useState<Array<any>>([]);
   const [aventure, setAventure] = useState<Array<any>>([]);
   const [demons, setDemons] = useState<Array<any>>([]);
   const [ecchi, setEcchi] = useState<Array<any>>([]);

   const GetAnime = async () => {
      setPopular(await useFetchAnime("https://gogoanime.consumet.org/popular"));

      setAction(
         await useFetchAnime("https://gogoanime.consumet.org/genre/action")
      );
      setAventure(
         await useFetchAnime("https://gogoanime.consumet.org/genre/adventure")
      );
      setDemons(
         await useFetchAnime("https://gogoanime.consumet.org/genre/demons")
      );
      setEcchi(
         await useFetchAnime("https://gogoanime.consumet.org/genre/ecchi")
      );
      setTopAiring(
         await useFetchAnime("https://gogoanime.consumet.org/top-airing")
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
