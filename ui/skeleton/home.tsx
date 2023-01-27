import {
   Flex,
   Skeleton,
   SkeletonCircle,
   SkeletonText,
   Stack,
} from "@chakra-ui/react";

function SkeletonHome() {
   return (
      <Stack spacing={5}>
         <Stack px={10}>
            <Skeleton
               height='55px'
               w='350px'
               mb={4}
               startColor='dark.secondary'
               endColor='dark.primary'
               borderRadius='lg'
            />
            <Flex gap={3}>
               {[1, 2, 3, 4, 5, 6].map((i: any, key: number) => (
                  <Skeleton
                     key={key}
                     height='430px'
                     w='350px'
                     borderRadius='lg'
                     startColor='dark.secondary'
                     endColor='dark.primary'
                  />
               ))}
            </Flex>
         </Stack>
         <Stack px={10}>
            <Skeleton
               height='55px'
               w='350px'
               mb={4}
               startColor='dark.secondary'
               endColor='dark.primary'
               borderRadius='lg'
            />
            <Flex gap={3}>
               {[1, 2, 3, 4, 5, 6].map((i: any, key: number) => (
                  <Skeleton
                     key={key}
                     height='430px'
                     w='350px'
                     borderRadius='lg'
                     startColor='dark.secondary'
                     endColor='dark.primary'
                  />
               ))}
            </Flex>
         </Stack>
         <Stack px={10}>
            <Skeleton
               height='55px'
               w='350px'
               mb={4}
               startColor='dark.secondary'
               endColor='dark.primary'
               borderRadius='lg'
            />
            <Flex gap={3}>
               {[1, 2, 3, 4, 5, 6].map((i: any, key: number) => (
                  <Skeleton
                     key={key}
                     height='430px'
                     w='350px'
                     borderRadius='lg'
                     startColor='dark.secondary'
                     endColor='dark.primary'
                  />
               ))}
            </Flex>
         </Stack>
      </Stack>
   );
}

export default SkeletonHome;
