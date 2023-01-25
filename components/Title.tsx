import { Heading } from "@chakra-ui/react";

interface Title {
   children: React.ReactNode;
}

export const Title = ({ children, ...props }: Title) => {
   return (
      <Heading variant="Title" {...props}>
         {children}
      </Heading>
   );
};
