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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1840: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          2100: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          2800: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          3300: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {arrayFilm.map((item: any, key: number) => (
          <SwiperSlide key={key}>
            <Box h="175px" borderRadius="lg">
              <Image
                src={item.img}
                alt="ok"
                w="full"
                h="full"
                borderRadius="lg"
                objectFit="cover"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Caroussel;
