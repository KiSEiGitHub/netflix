import { fetchContext } from "@/context/fetchContext";
import { Box, Heading, HStack, Link, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

const NavItem = ({ children, href }: any) => {
   const { asPath } = useRouter();

   const active = asPath === href;

   return (
      <Tag colorScheme={active ? "red" : "gray"}>
         <Link href={href}>{children}</Link>
      </Tag>
   );
};

export default function GenreNav({ title }: any) {
   const { genres } = useContext(fetchContext);

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
            {genres.map((item: any, key: number) => (
               <Box key={key}>
                  <NavItem href={`/genre/${item.id}`}>{item.name}</NavItem>
               </Box>
            ))}
         </HStack>
      </Box>
   );
}
