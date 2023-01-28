import Layout from "@/ui/Layout";
import SkeletonHome from "@/ui/skeleton/home";
import {
   Box,
   Heading,
   Text,
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   Flex,
   Image,
   Tag,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Divider,
   HStack,
   Link,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function MovieId({ movie, reviews, similar, credits }: any) {
   const [load, setLoad] = useState<boolean>(true);

   useEffect(() => {
      if (movie) {
         setLoad(false);
      }
   }, [movie]);

   if (load) {
      return <SkeletonHome />;
   }

   return (
      <Layout title={movie["original_title"]}>
         <Box
            display='flex'
            alignItems='center'
            w='100%'
            bg={`rgba(0, 0, 0, 0.4) url(${movie.img})`}
            bgBlendMode='darken'
            bgSize='cover'
            bgPos='center'
            h='800px'
            bgAttachment='fixed'
         >
            <Box maxW='600px'>
               <Heading variant='Netflix'>{movie.title}</Heading>
               <Text mt={4} variant='Para'>
                  {movie.overview}
               </Text>
               <Tag mt={4}>{movie.runtime} min</Tag>
               <Flex gap={3} mt={4}>
                  {movie.genres.map((item: any, key: number) => (
                     <Tag key={key}>{item.name}</Tag>
                  ))}
               </Flex>
            </Box>
         </Box>
         <Tabs w='100%'>
            <TabList>
               <Tab>Similar movies</Tab>
               <Tab>Credit & Cast</Tab>
               <Tab>Reviews</Tab>
            </TabList>

            <TabPanels>
               <TabPanel>
                  <Flex gap={5} flexWrap='wrap' justifyContent='space-between'>
                     {similar.map((item: any, key: number) => (
                        <Link href={`/browse/movie/${item.id}`} key={key}>
                           <Image
                              src={item.img}
                              alt='ok'
                              w='300px'
                              borderRadius='lg'
                              transition='0.4s'
                              _hover={{ transform: "scale(0.98)" }}
                           />
                        </Link>
                     ))}
                  </Flex>
               </TabPanel>
               <TabPanel>
                  <Accordion allowToggle>
                     <AccordionItem border='none'>
                        <h2>
                           <AccordionButton>
                              <Box as='span' flex='1' textAlign='left'>
                                 <Heading>Actor</Heading>
                              </Box>
                              <AccordionIcon />
                           </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <Flex flexWrap='wrap' gap={5}>
                              {credits.actor.map((item: any, key: number) => (
                                 <Image
                                    alt='ok'
                                    borderRadius='lg'
                                    h='300px'
                                    key={key}
                                    src={`https://image.tmdb.org/t/p/w500/${item["profile_path"]}`}
                                 />
                              ))}
                           </Flex>
                        </AccordionPanel>
                     </AccordionItem>

                     <AccordionItem>
                        <h2>
                           <AccordionButton>
                              <Box as='span' flex='1' textAlign='left'>
                                 <Heading>Production</Heading>
                              </Box>
                              <AccordionIcon />
                           </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <Flex flexWrap='wrap' gap={5}>
                              {credits.production.map(
                                 (item: any, key: number) => (
                                    <Image
                                       alt='ok'
                                       borderRadius='lg'
                                       h='300px'
                                       key={key}
                                       src={`https://image.tmdb.org/t/p/w500/${item["profile_path"]}`}
                                    />
                                 )
                              )}
                           </Flex>
                        </AccordionPanel>
                     </AccordionItem>
                     <AccordionItem>
                        <h2>
                           <AccordionButton>
                              <Box as='span' flex='1' textAlign='left'>
                                 <Heading>Directing</Heading>
                              </Box>
                              <AccordionIcon />
                           </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <Flex flexWrap='wrap' gap={5}>
                              {credits.directing.map(
                                 (item: any, key: number) => (
                                    <Image
                                       alt='ok'
                                       borderRadius='lg'
                                       h='300px'
                                       key={key}
                                       src={`https://image.tmdb.org/t/p/w500/${item["profile_path"]}`}
                                    />
                                 )
                              )}
                           </Flex>
                        </AccordionPanel>
                     </AccordionItem>
                     <AccordionItem>
                        <h2>
                           <AccordionButton>
                              <Box as='span' flex='1' textAlign='left'>
                                 <Heading>Writting</Heading>
                              </Box>
                              <AccordionIcon />
                           </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <Flex flexWrap='wrap' gap={5}>
                              {credits.writting.map(
                                 (item: any, key: number) => (
                                    <Image
                                       alt='ok'
                                       borderRadius='lg'
                                       h='300px'
                                       key={key}
                                       src={`https://image.tmdb.org/t/p/w500/${item["profile_path"]}`}
                                    />
                                 )
                              )}
                           </Flex>
                        </AccordionPanel>
                     </AccordionItem>
                     <AccordionItem>
                        <h2>
                           <AccordionButton>
                              <Box as='span' flex='1' textAlign='left'>
                                 <Heading>Editing</Heading>
                              </Box>
                              <AccordionIcon />
                           </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <Flex flexWrap='wrap' gap={5}>
                              {credits.editing.map((item: any, key: number) => (
                                 <Image
                                    alt='ok'
                                    borderRadius='lg'
                                    h='300px'
                                    key={key}
                                    src={`https://image.tmdb.org/t/p/w500/${item["profile_path"]}`}
                                 />
                              ))}
                           </Flex>
                        </AccordionPanel>
                     </AccordionItem>
                  </Accordion>
               </TabPanel>
               <TabPanel>
                  {reviews.map((item: any, key: number) => (
                     <>
                        <Box key={key} my={5}>
                           <HStack spacing={5} alignItems='baseline' h='full'>
                              <Heading size='lg' mb={2}>
                                 {item.author}
                              </Heading>
                              <Text fontSize='2em' color='red'>
                                 {item["author_details"].rating}
                              </Text>
                           </HStack>

                           <Text textAlign='justify' variant='Para'>
                              {item.content}
                           </Text>
                        </Box>
                        <Divider />
                     </>
                  ))}
               </TabPanel>
            </TabPanels>
         </Tabs>
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;

   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );

   const data = await res.json();
   data.img = "https://image.tmdb.org/t/p/w1280/" + data["poster_path"];

   // get Reviews
   const resReview = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { results: reviews } = await resReview.json();

   // similar Movie
   const resSim = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const { results: similarMovie } = await resSim.json();
   similarMovie.forEach(
      (o: any) =>
         (o.img = "https://image.tmdb.org/t/p/w500/" + o["poster_path"])
   );

   // credit & cast
   const resCredit = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`
   );
   const dataCredit = await resCredit.json();
   const actor = dataCredit.cast;
   const directing = dataCredit.crew.filter(
      (word: any) => word["known_for_department"] == "Directing"
   );
   const writting = dataCredit.crew.filter(
      (word: any) => word["known_for_department"] == "Writing"
   );
   const editing = dataCredit.crew.filter(
      (word: any) => word["known_for_department"] == "Editing"
   );
   const production = dataCredit.crew.filter(
      (word: any) => word["known_for_department"] == "Production"
   );

   return {
      props: {
         movie: data,
         reviews: reviews,
         similar: similarMovie,
         credits: {
            actor: actor,
            directing: directing,
            writting: writting,
            editing: editing,
            production: production,
         },
      },
   };
};
