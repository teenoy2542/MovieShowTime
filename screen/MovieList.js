import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator, FlatList, Image ,StyleSheet } from 'react-native'
import axios from "axios";



export default function MovieList({ navigation }) {

    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://movie-api.igeargeek.com/movies`)
            .then(res => {
                const movies = res.data.data;
                setMovies(movies)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }} >
                <ActivityIndicator></ActivityIndicator>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={movies}
                numColumns={1}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableHighlight
                            style={styles.cardMovie}
                            activeOpacity={1}
                            onPress={() =>
                                navigation.navigate(
                                    'MovieDetail',
                                    { id: item.id }
                                )
                            }>
                            <View style={styles.movieImage}>
                                <Image source={{ uri: item.posterUrl }}
                                    style={styles.movieImage} />
                                <View style={{ padding: 20 }}>
                                    <Text style={styles.textDate}>{item.showingAt}</Text>
                                    <Text style={styles.textTitle}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:20
    },
    textDate: {
        margin:1
    },
    textTitle: {
        margin:20
    },
    cardMovie: {
        margin:50
    },
    movieImage: {
        width:400,
        height:300,
        margin:20
    },
 })
 


