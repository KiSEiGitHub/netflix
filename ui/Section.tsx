import { Container, Heading, HStack } from "@chakra-ui/react";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
import ModalAllMovies from "./modal/modalAllMovies";

interface SectionProps {
   children: React.ReactNode;
   title: string;
   fullMovies: Array<any>;
   id: "movies" | "animes";
}

interface TitleProps {
   children: React.ReactNode;
}

const MotionHeading = m(Heading);

export const Title = ({ children }: TitleProps) => {
   const [trigger, setTrigger] = useState<string>("initial");

   return (
      <>
         <HStack>
            <AnimatePresence>
               <Heading
                  fontSize={{
                     sm: "1em",
                     md: "1em",
                     lg: "1.5em",
                     xl: "1.8em",
                     "2xl": "2.8em",
                  }}
                  variant='Title'
                  onMouseOver={() => setTrigger("over")}
                  onMouseLeave={() => setTrigger("leave")}
                  mb={3}
                  cursor='pointer'
               >
                  {children}
               </Heading>
               <MotionHeading
                  display='inline'
                  fontSize='0.95em'
                  ml={4}
                  color='blueTeal'
                  animate={{ opacity: trigger === "over" ? 1 : 0, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.05 }}
                  key={trigger}
               >
                  Tout explorer
               </MotionHeading>
            </AnimatePresence>
         </HStack>
      </>
   );
};

function Section({ children, title, fullMovies, id }: SectionProps) {
   return (
      <Container maxW='100%' px={0}>
         <AnimatePresence>
            <ModalAllMovies title={title} movies={fullMovies} id={id} />
         </AnimatePresence>
         {children}
      </Container>
   );
}

export default Section;
