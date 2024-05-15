import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';



const Categories = ({categories }) => {
  const navigation = useNavigation();

  const handleSeeAll = () => {
    navigation.navigate('Allcategories',{ categories});
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Categories</Text>
        <TouchableOpacity onPress={handleSeeAll} style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>
            See All <AntDesign name="right" size={17} color={COLORS.secondary} />
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {categories.map(cat => (
      <TouchableOpacity
        key={cat.id}
        style={styles.categoryButton}>
        <Text>{cat.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
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
