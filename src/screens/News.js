import React,{useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, Dimensions } from "react-native";
import { getFontSize } from "../constants/textResponsive";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import * as newsActions from '../store/actions/NewsActions';
import  NewItem  from "../components/NewItem";
import Colors from "../constants/Colors";

const News = () => {

    const newsData = useSelector((state) => state.news.newsData);

    const dispatch = useDispatch();

    const loadNews = () => {
        try {
            dispatch(newsActions.fetchNewsData());
        } catch (e) {
            console.log('er',e)
        }
    }

    useEffect(() => {
        loadNews();
    },[]);

    console.log('las noticias',newsData);

    return(
        <SafeAreaView style={styles.screen}>
            <Header />
            <Text style={styles.subtitle}>Noticias importantes</Text>
            <FlatList 
                data={newsData}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{paddingHorizontal:10}}
                renderItem={({item}) => (
                        <NewItem item={item}/>
                    )
                }
            />       
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'flex-start',
    },
    subtitle:{
        fontWeight:'300',
        fontSize:getFontSize(25),
        color:Colors.subtitle,
        marginTop:30,
        marginBottom:10,
        marginLeft:10
    }
});

export default News;