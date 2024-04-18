import { iconDiamondBase } from "@/commons/assets";
import { giftsMockup, tagsGiftMockup } from "@/commons/mockups/gift";
import { convertArrToArrays } from "@/untils";
import { isArray } from "lodash";
import { Box, HStack, Image, Text, useTheme, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SimpleGrid } from "react-native-super-grid";
import WrapIcon from "../icons/WrapIcon";

type Props = {
  typeRouter: "bag" | "popular" | string;
};

const giftAllMockup = giftsMockup.map((item) => {
  const tag = tagsGiftMockup.find((t) => t.id === item.tagId);
  return {
    ...item,
    tag,
  };
});

const NUM_COLUMNS = 4;
const NUM_ROWS = 2;

const RenderItem = ({ item }: any) => (
  <VStack key={item?.id} alignItems="center" space="1">
    {item?.tag && (
      <Box
        rounded="md"
        bg={item?.tag?.color}
        position="absolute"
        zIndex={10}
        px="1"
        top={-4}
        right={0}
      >
        <Text fontSize={9} fontWeight="semibold" color="white">
          {item.tag.name}
        </Text>
      </Box>
    )}

    <Image
      resizeMode="contain"
      alt={item?.id}
      source={{ uri: item?.cover_url }}
      w="12"
      h="12"
    />
    <Text fontSize="xs" isTruncated>
      {item.name}
    </Text>
    <HStack alignItems="center" space="1">
      <WrapIcon source={iconDiamondBase} size="4" alt="diamond" />
      <Text color="gray.600" fontWeight="bold">
        {item.price}
      </Text>
    </HStack>
  </VStack>
);

function GiftRouters({ typeRouter }: Props) {
  const layout = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { colors } = useTheme();
  const [dataCarousel, setDataCarousel] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = () => {
      let gifts: Array<any> = [];
      switch (typeRouter) {
        case "bag":
          break;
        case "popular":
          gifts = giftAllMockup;
          break;
        default:
          gifts = giftAllMockup.filter((i: any) => i.categoryId === typeRouter);
          break;
      }
      setDataCarousel(convertArrToArrays(gifts, NUM_COLUMNS * NUM_ROWS));
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Carousel
        data={dataCarousel}
        sliderWidth={layout.width}
        itemWidth={layout.width}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item }: any) => (
          <Box pt="4">
            {isArray(item) && (
              <SimpleGrid
                itemDimension={layout.width / 5}
                data={item}
                renderItem={RenderItem}
                listKey={"gift-list"}
              />
            )}
          </Box>
        )}
      />

      <Pagination
        dotsLength={dataCarousel.length}
        activeDotIndex={activeSlide}
        containerStyle={
          {
            // backgroundColor: "rgba(0, 0, 0, 0.2)",
          }
        }
        dotContainerStyle={{
          height: 2,
        }}
        dotStyle={{
          width: 8,
          height: 4,
          backgroundColor: colors.gray[700],
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </SafeAreaView>
  );
}

export default GiftRouters;
