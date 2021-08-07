// Import Swiper React components
import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const SwiperLayout = () => {
  const SwiperWidth = useBreakpointValue({ base: 375, sm: 1240 });

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      width={SwiperWidth}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{ margin: "0 auto", textAlign: "center" }}
    >
      <SwiperSlide>
        <Link href="/continent" passHref>
          <Flex
            as="a"
            direction="column"
            align="center"
            justify="center"
            w="100%"
            height="100%"
            color="gray.50"
            bg="url(/europa.jpeg)"
            bgSize="cover"
          >
            <Heading fontSize="48px">Europa</Heading>
            <Text fontSize="24px">O continente mais antigo</Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          height="100%"
          color="gray.50"
          bg="url(/oceania.jpeg)"
          bgSize="cover"
        >
          <Heading fontSize="48px">Oceania</Heading>
          <Text fontSize="24px">O continente mais ...</Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          height="100%"
          color="gray.50"
          bg="url(/africa.jpeg)"
          bgSize="cover"
        >
          <Heading fontSize="48px">Africa</Heading>
          <Text fontSize="24px">O continente mais ...</Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          height="100%"
          color="gray.50"
          bg="url(/north-america.jpeg)"
          bgSize="cover"
        >
          <Heading fontSize="48px">América do Norte</Heading>
          <Text fontSize="24px">O continente mais ...</Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          height="100%"
          color="gray.50"
          bg="url(/south-america.jpeg)"
          bgSize="cover"
        >
          <Heading fontSize="48px">América do Sul</Heading>
          <Text fontSize="24px">O continente mais ...</Text>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          height="100%"
          color="gray.50"
          bg="url(/asia.jpeg)"
          bgSize="cover"
        >
          <Heading fontSize="48px">Asia</Heading>
          <Text fontSize="24px">O continente mais ...</Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};
