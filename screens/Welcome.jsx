import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcomeheader from '../components/Welcomeheader'
import SearchBar from '../components/SearchBar'
import Slider from '../components/Slider'
import COLORS from '../constants/colors'
import Categories from '../components/Categories'
import Popularcourses from '../components/Popularcourses'
import Team from '../components/Team'
import { ScrollView } from 'react-native-gesture-handler'
const team=[
  {
    id:1,
    name:'member1',
    image:require('../assets/member1.jpg'),
  },
  {
    id:2,
    name:'member2',
    image:require('../assets/member2.jpg'),
  },
  {
    id:3,
    name:'member3',
    image:require('../assets/member3.jpg'),
  },
  {
    id:4,
    name:'member4',
    image:require('../assets/member4.jpg'),
  },

]
const categories = [
  {
    id: 1,
    name: '3D Design',
    url: 'https://icon-library.com/images/3d-icon-png/3d-icon-png-17.jpg',
  },
  {
    id: 2,
    name: 'Web Development',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png',
  },
  {
    id: 3,
    name: 'UI/UX',
    url: 'https://cdn.dribbble.com/users/13329/screenshots/111441/shot_1297090327.png',
  },
  {
    id: 4,
    name: 'Sign Language',
    url: 'https://cdn-icons-png.flaticon.com/512/6268/6268080.png',
  }
];
courses=[
  {
      id:1,
      title:'blabla',
      image:require('../assets/mobile.jpg'),
      Students:50,
      stars:5
  },
  {
    id:2,
    title:'blabla',
    image:require('../assets/web.jpg'),
    Students:150,
    stars:4
},
{
  id:3,
  title:'blabla',
  image:require('../assets/ui.jpg'),
  Students:90,
  stars:2
},
];
const Welcome = () => {
  return (
    <ScrollView>
    <View style={{padding:35,top:20, backgroundColor:'#F5F9FF',flex: 1,}}>
        <Welcomeheader/>
        <SearchBar/>
        <Slider/>
        <Categories categories={categories}  />
        <Popularcourses courses={courses}/>
        <Team team={team}/>
        
  </View>
  </ScrollView>
  ) 
}

export default Welcome

const styles = StyleSheet.create({
    
})