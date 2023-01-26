import { Box, Heading } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Top() {
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
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1065: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          2100: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          2500: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          3000: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 9, 10].map((item: any, key: number) => (
          <SwiperSlide key={key}>
            <Box bg="red" h="200px" borderRadius="lg" pos="relative">
              <Heading
                fontSize="17em"
                pos="absolute"
                top="40%"
                color="#000"
                fontWeight={800}
                textShadow="#4f4f4f 1px 10px 0;"
                left="30%"
                transform="translate(-50%, -50%)"
              >
                {item}
              </Heading>
              <Box
                pos="absolute"
                right={0}
                w="150px"
                borderRadius="lg"
                h="200px"
                bg="teal"
                zIndex={2}
              >
                {/* mettre l'image */}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Top;
