import { iconDiamondBase } from "@/commons/assets";
import { giftsMockup, tagsGiftMockup } from "@/commons/mockups/gift";
import { convertArrToArrays } from "@/untils";
import { isArray } from "lodash";
import { Box, HStack, Text, useTheme, View, VStack } from "native-base";
import React, { useMemo, useState } from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SimpleGrid } from "react-native-super-grid";
import WrapFastImg from "../wrapper/WrapFastImg";
import WrapIcon from "../wrapper/WrapIcon";

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
    <WrapFastImg
      resizeMode="contain"
      uri={item?.cover_url}
      style={{ width: 48, height: 48 }}
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

const fetchData = (typeRouter: string) => {
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
  return convertArrToArrays(gifts, NUM_COLUMNS * NUM_ROWS);
};

function GiftRouters({ typeRouter }: Props) {
  const layout = useWindowDimensions();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { colors } = useTheme();
  const [dataCarousel, setDataCarousel] = useState<Array<any>>(
    fetchData(typeRouter) || []
  );

  useMemo(() => {
    setDataCarousel(fetchData(typeRouter));
  }, []);

  return (
    <SafeAreaView>
      <Carousel
        data={dataCarousel}
        sliderWidth={layout.width}
        itemWidth={layout.width}
        onSnapToItem={(index) => setActiveSlide(index)}
        useScrollView={true}
        inactiveSlideShift={0}
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
      <View position="relative">
        <Pagination
          dotsLength={dataCarousel.length}
          activeDotIndex={activeSlide}
          containerStyle={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -32,
          }}
          dotStyle={{
            width: 10,
            height: 3,
            backgroundColor: colors.gray[700],
          }}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.8}
        />
      </View>
    </SafeAreaView>
  );
}

export default GiftRouters;
