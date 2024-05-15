import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { Feather } from '@expo/vector-icons';
const CourseCard = ({ course }) => {
    const [isFavourite, setFavourite] = useState(false);

    return (
        <View style={styles.container}>
            <Image source={course.image} style={styles.image} />
            <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']} style={styles.overlay}>
                <View style={styles.favoriteButtonContainer}>
                    <TouchableOpacity
                        onPress={() => setFavourite(!isFavourite)}
                        style={styles.favoriteButton}
                    >
                        <AntDesign name="heart" size={24} color={isFavourite ? 'red' : 'white'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <StarRating
                        disabled={true}
                        starSize={15}
                        containerStyle={styles.starRatingContainer}
                        maxStars={5}
                        rating={course.stars}
                        emptyStar={require('../assets/emptyStar.png')}
                        fullStar={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.title}>{course.title}</Text>
                    <View style={styles.details}>
                    <Feather name="user-check" size={24} color="white" style={{marginRight:10}}/>
                        <Text style={styles.detailsText}>{course.Students} Students</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
        position: 'relative',
    },
    image: {
        width: 322,
        height: 200,
        borderRadius: 20,
    },
    overlay: {
        position: 'absolute',
        padding: 12,
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
    favoriteButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    favoriteButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    content: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    starRatingContainer: {
        width: 90,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    detailsText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CourseCard;
