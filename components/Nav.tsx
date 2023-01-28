import { NavProps } from "@/interface/interface";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
   Button,
   Flex,
   HStack,
   Image,
   Link,
   useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ItemNav = ({ children, href }: NavProps) => {
   const { pathname } = useRouter();
   const active = href === pathname;
   return (
      <Link
         href={href}
         color={active ? "#fff" : undefined}
         variant='Nav'
         cursor={active ? "auto" : "pointer"}
         pointerEvents={active ? "none" : undefined}
         userSelect='none'
      >
         {children}
      </Link>
   );
};

function Nav() {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Flex
         w='100%'
         h='50px'
         bg='dark.primary'
         px={10}
         alignItems='center'
         justifyContent='space-between'
      >
         <HStack spacing={8}>
            <Link href='/'>
               <Image src='./assets/logo.png' alt='netflix-logo' w='83px' />
            </Link>
            <HStack spacing={4}>
               <ItemNav href='/'>Home</ItemNav>
               <ItemNav href='/movies'>Movies</ItemNav>
               <ItemNav href='/animes'>Animes</ItemNav>
            </HStack>
         </HStack>
         <Button
            onClick={toggleColorMode}
            variant='outline'
            size='sm'
            borderRadius='full'
         >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
         </Button>
      </Flex>
   );
}

export default Nav;
