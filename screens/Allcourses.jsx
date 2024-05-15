import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

const Allcourses = ({ route }) => {
  // Initialize an array to manage favorite status for each course
  const [isFavouriteList, setIsFavouriteList] = useState(Array(route.params.courses.length).fill(false));

  const navigation = useNavigation(); 

  // Function to toggle favorite status for a specific course index
  const toggleFavorite = (index) => {
    const updatedIsFavouriteList = [...isFavouriteList];
    updatedIsFavouriteList[index] = !updatedIsFavouriteList[index];
    setIsFavouriteList(updatedIsFavouriteList);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.header}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>All courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.courseContainer}>
          {route.params.courses.map((course, index) => (
            <TouchableOpacity key={course.id} style={styles.courseItem}>
              <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(index)}>
                <AntDesign name="heart" size={24} color={isFavouriteList[index] ? 'red' : 'lightgrey'} />
              </TouchableOpacity>
              <Image source={course.image} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDetails}>{course.Students} <Feather name="user" size={14} color="black" /> </Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={course.stars}
                  starSize={14}
                  fullStarColor={'#F7B521'}
                  emptyStarColor={COLORS.darkgray}
                  containerStyle={styles.starRatingContainer}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 30,
    backgroundColor: '#F5F9FF'
  },
  header: {
    marginBottom: 30,
  },
  courseContainer: {},
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    position: 'relative', 
    elevation: 5,// Add position relative to allow positioning of heart icon
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1,
    

  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F98021',
  },
  courseDetails: {
    fontSize: 14,
    color: COLORS.darkgray,
  },
  starRatingContainer: {
    width: 90,
    marginTop: 5,
  },
});

export default Allcourses;
