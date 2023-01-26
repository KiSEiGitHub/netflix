import Caroussel from "@/ui/caroussel";
import Layout from "@/ui/Layout";
import Section from "@/ui/Section";
import Top from "@/ui/Top";

export default function Home() {
   return (
      <Layout title='Home'>
         <Section title='Home'>
            <Caroussel />
         </Section>

         <Section title='Anime'>
            <Caroussel />
         </Section>

         <Section title='Top 10 des séries'>
            <Top />
         </Section>

         <Section title='Série japonaise'>
            <Caroussel />
         </Section>
      </Layout>
   );
}
