import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'
import moment from 'moment';



export default function MovieDetail({ navigation, route }) {
    const [movies, setMovies] = useState({
        genre: []
    })


    useEffect(() => {
        const itemId = route.params.id
        axios.get('https://movie-api.igeargeek.com/movies/' + itemId)
            .then(res => {
                const movies = res.data;
                setMovies(movies)
            })
    }, [])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}>
            <WebView
                allowsFullscreenVideo
                source={{ uri: movies.youtubeUrl }}
                style={{ height: 200, flex: 1 }}
            />
            <View style={{ flex: 2, backgroundColor: '#362420', padding: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: movies.posterUrl }} style={{ flex: 1, height: 180 }} resizeMode={'stretch'}></Image>
                    <View style={{ flex: 2, marginLeft: 15 }}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{movies.name}</Text>
                        <Text style={{ color: 'white' }}>ประเภท : {movies.genre.join(', ')}</Text>
                        <Text style={{ color: 'white' }}>วันที่เข้าฉาย : {moment(movies.showingAt).format('DD/MM/YYYY')}</Text>
                        <Text style={{ color: 'white' }}>ระยะเวลา : {movies.duration} นาที</Text>
                    </View>
                </View>

                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginVertical: 10 }}></View>

                <View style={{ flex: 1 }}>
                    <Text style={{color:'white',lineHeight:25}}>เรื่องย่อ</Text>
                    <Text style={{color:'white',lineHeight:25}}>{movies.description}</Text>
                </View>

            </View>

        </ScrollView>
    )
}



