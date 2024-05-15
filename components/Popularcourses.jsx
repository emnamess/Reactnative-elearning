import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import CourseCard from './CourseCard';
import { useNavigation } from '@react-navigation/native';

const Popularcourses = ({courses}) => {
  const navigation = useNavigation();

    const handleSeeAll = () => {
      navigation.navigate('Allcourses',{courses});  
      };
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>Popular Courses</Text>
            <TouchableOpacity onPress={handleSeeAll} style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>
                See All <AntDesign name="right" size={17} color={COLORS.secondary} />
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {courses.map((item,index)=> {
              return (
                <CourseCard key={index} course={item}/>
              )
            })
            }
          </ScrollView>
        </View>
      );
}

export default Popularcourses

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: COLORS.secondary,
    },
    categoryButton: {
      backgroundColor: COLORS.lightblue,
      padding: 10,
      paddingHorizontal: 14,
      borderRadius: 20,
      marginRight: 10,
      marginTop: 10,
    },
    seeAllButton: {
      padding: 10,
      borderRadius: 20,
    },
    seeAllText: {
      color: COLORS.secondary,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });