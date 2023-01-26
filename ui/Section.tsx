import { Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

interface SectionProps {
   children: React.ReactNode;
   title: string;
}

interface TitleProps {
   children: React.ReactNode;
}

const MotionHeading = m(Heading);

const Title = ({ children }: TitleProps) => {
   const [trigger, setTrigger] = useState<string>("initial");

   return (
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
         <MotionHeading
            display='inline'
            fontSize='0.65em'
            ml={4}
            color='blueTeal'
            animate={{ opacity: trigger === "over" ? 1 : 0, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05 }}
            key={trigger}
         >
            Tout explorer
         </MotionHeading>
      </Heading>
   );
};

function Section({ children, title }: SectionProps) {
   return (
      <Container maxW='100%' px={0}>
         <AnimatePresence>
            <Title>{title}</Title>
         </AnimatePresence>
         {children}
      </Container>
   );
}

export default Section;
