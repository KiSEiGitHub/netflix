import { fetchContext } from "@/context/fetchContext";
import { Box, Heading, HStack, Link, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AnimeGenre } from "@/data/AnimeGenre";

const NavItem = ({ children, href }: any) => {
   const { asPath } = useRouter();

   const active = asPath === href;

   return (
      <Tag colorScheme={active ? "red" : "gray"}>
         <Link href={href}>{children}</Link>
      </Tag>
   );
};

export default function GenreAnimeNav({ title }: any) {
   return (
      <Box
         w='100%'
         h='auto'
         bg='dark.primary'
         pos='sticky'
         top={0}
         zIndex={2}
         pb={3}
      >
         <Heading variant='Title' pt={2}>
            {title}
         </Heading>
         <HStack mt={3} spacing={2}>
            {AnimeGenre.map((item: any, key: number) => (
               <Box key={key}>
                  <NavItem href={`/genre/anime/${item.name}`}>
                     {item.name}
                  </NavItem>
               </Box>
            ))}
         </HStack>
      </Box>
   );
}
