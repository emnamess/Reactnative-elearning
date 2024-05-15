import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const Slider = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const CarouselData = [
    {
      id: "01",
      image: require("../assets/slide1.png")
    },
    {
      id: "02",
      image: require("../assets/slide2.png")
    }
  ];

  const renderItem = ({ item, index }) => (
    <View>
      <Image source={item.image} style={{ height: 200, width: 324, borderRadius: 22 }} />
    </View>
  );

  // Handle scroll
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  }

  // Render dot indicators
  const renderDotIndicators = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {CarouselData.map((dot, dotIndex) => (
          <View key={dotIndex} style={{ marginHorizontal: 6 }}>
            <View
              style={{
                backgroundColor: activeIndex === dotIndex ? "#FC2B22" : "#CCCCCC",
                height: 10,
                width: 10,
                borderRadius: 5,
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (activeIndex + 1) % CarouselData.length;
      // Scroll to the next item
      flatListRef.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 2000); // Change the interval time as needed (e.g., 3000 ms for 3 seconds)
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View>
      <FlatList
        ref={(ref) => { flatListRef = ref; }}
        data={CarouselData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      {renderDotIndicators()}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
