import React from "react";
import {
  Dimensions,
  StyleProp,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RATIO = 9 / 16;

type Props = {
  renderParallaxBackground?: (props: {
    width?: number;
    height?: number;
    animatedValue?: SharedValue<any>;
  }) => React.ReactNode;
  renderHeader?: (props: {
    width?: number;
    height?: number;
    animatedValue?: SharedValue<any>;
  }) => React.ReactNode;
  parallaxHeight: number;
  width?: number;
  height?: number;
  contentBackgroundColor: string;
  headerHeight?: number;
  wrapperStyle?: StyleProp<ViewStyle>;
  wrapperHeaderStyle: StyleProp<ViewStyle>;
  isHeaderFixed?: boolean;
  headerFixedTransformY?: number;
  useNativeDriver?: boolean;
  headerBackgroundColor?: string;
  headerFixedBackgroundColor?: string;
  children: React.ReactNode;
  scrollEventThrottle?: number;
  wrapperContentStyle?: StyleProp<ViewStyle>;
  isBackgroundScalable?: boolean;
  backgroundScale: number;
  parallaxBackgroundScrollSpeed: number;
  fadeOutParallaxBackground?: boolean;
};

ParallaxHeaderScrollView.defaultProps = {
  parallaxHeight: Dimensions.get("window").width * RATIO,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  headerHeight: 45,
  wrapperHeaderStyle: {},
  isHeaderFixed: false,
  useNativeDriver: false,
  contentBackgroundColor: "#fff",
  headerBackgroundColor: "rgba(0, 0, 0, 0)",
  headerFixedBackgroundColor: "rgba(0, 0, 0, 1)",
  scrollEventThrottle: 16,
  isBackgroundScalable: true,
  backgroundScale: 3,
  backgroundScaleOrigin: "top",
  parallaxBackgroundScrollSpeed: 5,
  fadeOutParallaxBackground: false,
};

function ParallaxHeaderScrollView(props: Props) {
  const layout = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const {
    // data,
    wrapperStyle,
    width,
    height,
    renderHeader,
    // sections,
    children,
    scrollEventThrottle,
    contentBackgroundColor,
    // renderRow,
    // renderItem,
    // dataSource,
    // scrollStyle,
    parallaxHeight,
    wrapperContentStyle,
    // useNativeDriver,
    // scrollableComponent,
    // contentContainerStyle,
    renderParallaxBackground,
    // renderParallaxForeground,
    ...scrollViewProps
  } = props;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOfSet = useScrollViewOffset(scrollRef);

  return (
    <View
      style={[
        wrapperStyle,
        {
          width,
          height,
        },
      ]}
    >
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={scrollEventThrottle}
      >
        {renderParallaxBackground &&
          RenderParallaxBackground({ scrollOfSet, ...props })}
        <View
          style={[
            {
              backgroundColor: contentBackgroundColor,
              minHeight: layout.height - parallaxHeight,
              marginBottom: insets.bottom + 90,
            },
            wrapperContentStyle,
          ]}
        >
          {children}
        </View>
      </Animated.ScrollView>
      {renderHeader && RenderHeader({ scrollOfSet, ...props })}
    </View>
  );
}

export default ParallaxHeaderScrollView;

type ParallaxBackgroundProps = Props & {
  scrollOfSet?: SharedValue<any>;
};

const RenderParallaxBackground = (props: ParallaxBackgroundProps) => {
  const {
    width,
    parallaxHeight: height,
    isBackgroundScalable,
    renderParallaxBackground,
    scrollOfSet,
    backgroundScale,
    fadeOutParallaxBackground,
  } = props;

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: !isBackgroundScalable
            ? 1
            : interpolate(
                scrollOfSet?.value,
                [-height, 0],
                [backgroundScale, 1],
                Extrapolate.CLAMP
              ),
        },
        {
          translateY: interpolate(
            scrollOfSet?.value,
            [-height, 0, height],
            [-height / 2, 0, height * 0.75],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: !fadeOutParallaxBackground
        ? 1
        : interpolate(scrollOfSet?.value, [0, height], [1, 0]),
    };
  });

  return (
    <Animated.View
      style={[
        {
          width,
          height,
        },
        scaleAnimatedStyle,
      ]}
      pointerEvents="box-none"
    >
      {renderParallaxBackground &&
        renderParallaxBackground({ width, height, animatedValue: scrollOfSet })}
    </Animated.View>
  );
};
type RenderHeaderProps = Props & {
  scrollOfSet?: SharedValue<any>;
};

const RenderHeader = (props: RenderHeaderProps) => {
  const {
    width,
    headerHeight,
    renderHeader,
    wrapperHeaderStyle,
    scrollOfSet,
    isHeaderFixed,
    parallaxHeight = Dimensions.get("window").width * RATIO,
    useNativeDriver,
    headerFixedTransformY = 0,
    headerBackgroundColor,
    headerFixedBackgroundColor,
  } = props;
  const insets = useSafeAreaInsets();
  const height = insets.top + (headerHeight || 45);

  const transferAnimatedStyle = useAnimatedStyle(() => {
    if (!isHeaderFixed) {
      const parallaxHeightWithoutHeader = parallaxHeight - height;
      return {
        transform: [
          {
            translateY: interpolate(
              scrollOfSet?.value,
              parallaxHeightWithoutHeader
                ? [0, parallaxHeight - height, parallaxHeight]
                : [0, parallaxHeight],
              parallaxHeightWithoutHeader ? [0, 0, -height] : [0, -height]
            ),
          },
        ],
      };
    } else if (headerFixedTransformY) {
      return {
        transform: [
          {
            translateY: interpolate(
              scrollOfSet?.value,
              [0, headerFixedTransformY],
              [0, -headerFixedTransformY]
            ),
          },
        ],
      };
    }
    return {
      transform: [
        {
          translateY: 0,
        },
      ],
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    if (!useNativeDriver && headerBackgroundColor) {
      return {
        backgroundColor: interpolateColor(
          scrollOfSet?.value,
          [0, parallaxHeight - height],
          [
            headerBackgroundColor,
            headerFixedBackgroundColor || "rgba(0, 0, 0, 1)",
          ]
        ),
      };
    } else if (useNativeDriver && headerBackgroundColor) {
      return {
        backgroundColor: headerBackgroundColor,
      };
    }
    return {
      backgroundColor: "transparent",
    };
  });

  return (
    <View
      style={[
        {
          position: "absolute",
          top: 0,
          width,
          height,
          zIndex: 20,
        },
        wrapperHeaderStyle,
      ]}
      pointerEvents="box-none"
    >
      <Animated.View
        style={[
          { flex: 1, width, height },
          backgroundAnimatedStyle,
          transferAnimatedStyle,
        ]}
        pointerEvents="box-none"
      >
        {renderHeader &&
          renderHeader({
            width,
            height,
            animatedValue: scrollOfSet,
          })}
      </Animated.View>
    </View>
  );
};
