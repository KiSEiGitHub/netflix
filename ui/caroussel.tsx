import { Box, Image, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarousselProps {
   arrayFilm: Array<any>;
}

function Caroussel({ arrayFilm }: CarousselProps) {
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               850: {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
               1280: {
                  slidesPerView: 5,
                  spaceBetween: 10,
               },
               1840: {
                  slidesPerView: 6,
                  spaceBetween: 10,
               },
               2100: {
                  slidesPerView: 7,
                  spaceBetween: 10,
               },
               2800: {
                  slidesPerView: 8,
                  spaceBetween: 10,
               },
               3300: {
                  slidesPerView: 9,
                  spaceBetween: 10,
               },
            }}
            className='mySwiper'
         >
            {arrayFilm.map((item: any, key: number) => (
               <SwiperSlide key={key}>
                  <Box
                     h={{
                        sm: "175px",
                        md: "250px",
                        lg: "350px",
                        xl: "430px",
                        "2xl": "600px",
                     }}
                     borderRadius='lg'
                  >
                     <Image
                        transition='0.3s ease-out'
                        _hover={{ transform: "scale(0.98)" }}
                        src={item.img}
                        alt='ok'
                        w='full'
                        h='full'
                        pos='absolute'
                        borderRadius='lg'
                        objectFit='cover'
                     />
                  </Box>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}

export default Caroussel;
