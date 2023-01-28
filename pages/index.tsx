import { fetchContext } from "@/context/fetchContext";
import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import SkeletonHome from "@/ui/skeleton/home";
import Top from "@/ui/Top";
import { useContext, useEffect, useState } from "react";

export default function Home() {
   const [load, setload] = useState(true);

   const { pop } = useContext(fetchContext);
   const { top } = useContext(fetchContext);
   const { up } = useContext(fetchContext);
   const { tv } = useContext(fetchContext);

   useEffect(() => {
      if (Object.keys(pop).length > 0 && pop.constructor === Object) {
         if (Object.keys(top).length > 0 && top.constructor === Object) {
            if (Object.keys(up).length > 0 && up.constructor === Object) {
               if (Object.keys(tv).length > 0 && tv.constructor === Object) {
                  setload(false);
               }
            }
         }
      }
   }, [pop, top, up, tv]);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title='Home'>
         {!load && (
            <>
               <Section
                  title='Appréciés sur Netflix'
                  fullMovies={pop.two}
                  id='movies'
               >
                  <Caroussel arrayFilm={pop.one} id='movies' />
               </Section>
               <Section title='Top des films' fullMovies={top.two} id='movies'>
                  <Top top={top.one} id={1} />
               </Section>

               <Section title='Upcoming movies' fullMovies={up.two} id='movies'>
                  <Caroussel arrayFilm={up.one} id='movies' />
               </Section>

               <Section title='Séries TV' fullMovies={tv.two} id='movies'>
                  <Caroussel arrayFilm={tv.one} id='movies' />
               </Section>
            </>
         )}
      </Layout>
   );
}
