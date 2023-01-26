import { createContext, useEffect, useState } from "react";
export const fetchContext = createContext<any>(null);

const ContextFetch = ({ children, data }: any) => {
   const [popular, setPopular] = useState([]);

   const getPopular = async () => {
      const res = await fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
      );
      const { results } = await res.json();
      results.forEach(
         (o: any) =>
            (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
      );
      setPopular(results);
   };

   useEffect(() => {
      getPopular();
   }, []);

   return (
      <fetchContext.Provider value={{ popular }}>
         {children}
      </fetchContext.Provider>
   );
};

export default ContextFetch;
