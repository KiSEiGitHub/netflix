import { Container, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

interface LayoutProps {
   title: string;
   children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
   const [Loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(false);
   }, []);

   if (Loading) {
      return <>Chargement</>;
   }

   return (
      <>
         <Head>
            <title>{title} - Netflix</title>
         </Head>
         <Container maxW='100%' px={10} mb={10}>
            <VStack spacing={12}>{children}</VStack>
         </Container>
      </>
   );
}

export default Layout;
