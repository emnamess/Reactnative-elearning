import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" style={{marginRight:10}} />
      <TextInput 
      placeholder='Search'
      style={{marginLeft:20}}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
container:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    elevation:2,
    marginBottom:10,
    alignItems:'center',
    
},

})