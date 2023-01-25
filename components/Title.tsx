import { Heading } from "@chakra-ui/react";

interface Title {
  children: React.ReactNode;
  variant: "dark" | "light" | "system";
  textAlign: "center" | "justify";
}

export const Title = ({ children, variant, textAlign, ...props }: Title) => {
  return (
    <Heading variant={variant} {...props}>
      {children}
    </Heading>
  );
};
