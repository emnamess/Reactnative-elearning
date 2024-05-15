import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../constants/colors';

const Team = ({team}) => {
    const navigation = useNavigation();
   
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.secondary}}>Team</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {team.map(team => (
          <TouchableOpacity
            key={team.id}>
            <Image source={team.image} style={styles.image}/>
            <Text style={styles.text}>{team.name}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
        </View>
      );
}

export default Team

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
      fontSize: 18,
      color: COLORS.secondary,
      textAlign: 'center',
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
    
    image: {
        width: 90,
        height: 120,
        borderRadius: 20,
        marginRight: 10,
      },
  });