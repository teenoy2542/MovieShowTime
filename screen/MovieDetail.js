import React,{useEffect,useState} from 'react'
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'


export default function MovieDetail({navigation,route}) {
    const [movies,setMovies] = useState({})
    

    useEffect(() => {
        const itemId = route.params.id
        axios.get('https://movie-api.igeargeek.com/movies/' + itemId)
            .then(res => {
                const movies = res.data;
                setMovies(movies)
            })
    }, [])

    return (
        <View style={{flex:1}}>
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}                
            />

        </View>
    )
}



