import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Allcategories = ({ route }) => {
  const { categories } = route.params;
  const [activeCategory, setActiveCategory] = useState(null);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AntDesign name="arrowleft" size={24} color="black" onPress={handleGoBack} style={{marginRight:10}}/>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>All categories</Text>
    </TouchableOpacity>
      <View style={styles.categoryContainer}>
        <ScrollView showsVerticalScrollIndicator={true} style={{marginTop:20 }}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryItem,
                activeCategory === cat ? styles.activeCategory : null,
              ]}
              onPress={() => handleCategoryPress(cat)}
            >
              <Image source={{ uri: cat.url }} style={styles.image} />
              <Text>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 30,
    backgroundColor:'#F5F9FF'
  },
  header: {
    marginBottom: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Align category items between start and end of container
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    width: '48%', // Set width for each category item to almost half the screen width
    
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor:COLORS.lightblue, // Change to the desired color for the active category
    width:322,
    borderRadius:40
  },
});

export default Allcategories;
