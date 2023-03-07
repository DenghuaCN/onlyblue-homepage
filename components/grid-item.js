import NextLink from 'next/link';
// import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react';
import { Global } from '@emotion/react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center" >
    <LinkBox cursor="pointer">
      <Image src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
      />
      <LinkOverlay href={href} taget="_blank" >
        <Text mt={2}>{ title }</Text>
      </LinkOverlay>
      <Text fontSize={14}>{ children }</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur' />

        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const PracticeGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center" >
    <NextLink href={`/practice/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={`/practice/${id}`} >
          <Text mt={2}>{ title }</Text>
        </LinkOverlay>
        <Text fontSize={14}>{ children }</Text>
      </LinkBox>
    </NextLink>
  </Box>
)


export const CarouselWorkGridItem = ({ children, id, title, thumbnails, delay = 3000 }) => (
  <Box w="100%" align="center">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay,
      }}
    >
      {thumbnails.map((thumbnail, idx) => (
          <SwiperSlide
            key={idx}
          >
            {/* <Box style={{maxWidth: '27%'}}>
              <Image
                src={thumbnail.src}
                alt={'img'}
                objectFit="contain"
              />
            </Box> */}
            <Box
              style={{
                backgroundImage: `url(${thumbnail})`,
                width: '100%',
                height: '200px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
            </Box>
          </SwiperSlide>
      ))}
    </Swiper>
    <Text marginTop={2} fontSize={14}>{children}</Text>
  </Box>
)



export const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
    .swiper-slide-image {
      border: 1px solid red;
    }
    .test > span {
    }
  `}
  />
)
