import { fetchContext } from "@/context/fetchContext";
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
} from "@chakra-ui/react";
import { useContext } from "react";
import { Title } from "./Section";

interface PropsModal {
   title: string;
   movies: Array<any>;
}

function ModalAllMovies({ title, movies }: PropsModal) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [a, b, c] = movies;
   const { popular } = useContext(fetchContext);
   console.log(popular);

   return (
      <>
         <Box onClick={onOpen}>
            <Title>{title}</Title>
         </Box>

         <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
            <ModalOverlay />
            <ModalContent
               bg={useColorModeValue("light.secondary", "dark.primary")}
            >
               <ModalHeader>
                  <Heading textAlign='center'>{title}</Heading>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <Flex flexWrap='wrap' gap={5} justifyContent='center' mb={4}>
                     {a.map((item: any, key: number) => (
                        <Box mt={4} key={key} w='250px' h='175px' bg='teal'>
                           1
                        </Box>
                     ))}
                  </Flex>
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   );
}

export default ModalAllMovies;
