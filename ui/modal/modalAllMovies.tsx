import {
   Box,
   Flex,
   Heading,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   useColorModeValue,
   useDisclosure,
   Image,
} from "@chakra-ui/react";
import { Title } from "../Section";

interface PropsModal {
   title: string;
   movies: Array<any>;
   id: "movies" | "animes";
}

function ModalAllMovies({ title, movies, id }: PropsModal) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [a, b, c] = movies;

   return (
      <>
         <Box onClick={onOpen}>
            <Title>{title}</Title>
         </Box>

         <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
            <ModalOverlay />
            <ModalContent
               bg={useColorModeValue("dark.primary", "dark.primary")}
            >
               <ModalHeader>
                  <Heading textAlign='center' variant='Title'>
                     {title}
                  </Heading>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  {movies.length && (
                     <Flex
                        flexWrap='wrap'
                        gap={5}
                        justifyContent='center'
                        mb={4}
                     >
                        {a.map((item: any, key: number) => (
                           <Box mt={4} key={key} w='320px' h='450px'>
                              <Image
                                 _hover={{ transform: "scale(0.98)" }}
                                 transition='0.3s'
                                 alt='photo'
                                 src={id == "animes" ? item.animeImg : item.img}
                                 objectFit='cover'
                                 h='full'
                                 w='full'
                                 borderRadius='lg'
                              />
                           </Box>
                        ))}
                        {b.map((item: any, key: number) => (
                           <Box mt={4} key={key} w='320px' h='450px'>
                              <Image
                                 _hover={{ transform: "scale(0.98)" }}
                                 transition='0.3s'
                                 alt='photo'
                                 src={id == "animes" ? item.animeImg : item.img}
                                 objectFit='cover'
                                 h='full'
                                 w='full'
                                 borderRadius='lg'
                              />
                           </Box>
                        ))}
                        {c.map((item: any, key: number) => (
                           <Box mt={4} key={key} w='320px' h='450px'>
                              <Image
                                 _hover={{ transform: "scale(0.98)" }}
                                 transition='0.3s'
                                 alt='photo'
                                 src={id == "animes" ? item.animeImg : item.img}
                                 objectFit='cover'
                                 h='full'
                                 w='full'
                                 borderRadius='lg'
                              />
                           </Box>
                        ))}
                     </Flex>
                  )}
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   );
}

export default ModalAllMovies;
