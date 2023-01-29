import Nav from "@/components/Nav";
import ContextFetch from "@/context/fetchContext";
import AnimeContext from "@/context/fetchContextAnime";
import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <Head>
            <title>Netflix</title>
            <meta charSet='UTF-8' />
         </Head>
         <Nav />
         <AnimatePresence>
            <ContextFetch>
               <Component {...pageProps} />
            </ContextFetch>
         </AnimatePresence>
      </ChakraProvider>
   );
}
