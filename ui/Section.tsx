import { Container, Heading } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title: string;
}

function Section({ children, title }: SectionProps) {
  return (
    <Container maxW="100%" px={0}>
      <Heading variant="Title" mb={3}>{title}</Heading>
      {children}
    </Container>
  );
}

export default Section;
