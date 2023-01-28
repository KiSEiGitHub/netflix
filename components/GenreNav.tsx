import { fetchContext } from "@/context/fetchContext";
import { Box, Heading, HStack, Link, Tag } from "@chakra-ui/react";
import { useContext } from "react";

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
               <Tag key={key}>
                  <Link href={`/genre/${item.id}`}>{item.name}</Link>
               </Tag>
            ))}
         </HStack>
      </Box>
   );
}
