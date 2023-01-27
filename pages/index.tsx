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
      setTimeout(() => {
         setload(false);
      }, 1500);
   }, []);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title='Home'>
         {!load && (
            <>
               <Section title='Appréciés sur Netflix' fullMovies={pop.two}>
                  <Caroussel arrayFilm={pop.one} />
               </Section>
               <Section title='Top des films' fullMovies={top.two}>
                  <Top top={top.one} />
               </Section>

               <Section title='Upcoming movies' fullMovies={up.two}>
                  <Caroussel arrayFilm={up.one} />
               </Section>

               <Section title='Séries TV' fullMovies={tv.two}>
                  <Caroussel arrayFilm={tv.one} />
               </Section>
            </>
         )}
      </Layout>
   );
}
