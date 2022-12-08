import React,{useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { getFontSize } from "../constants/textResponsive";
import Colors from "../constants/Colors";
import PortfolioItem from "../components/PortfolioItem";
import * as WebBrowser from 'expo-web-browser';
import { useSelector, useDispatch } from "react-redux";
import * as detailActions from '../store/actions/DetailActions';
import Chart from "../components/LineChart";



const Details = ({route}) => {
    console.log('detail',route)

    const item = route.params;

    const dispatch = useDispatch();

    const points = useSelector((state) => state.detail.periods);
    const loading = useSelector((state) => state.detail.loading);


    const loadData = () => {
        try {
            dispatch(detailActions.fetchPeriods(item.id))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        loadData();
    },[])

    const goWeb = async(url) => {
        try {
            await WebBrowser.openBrowserAsync(url,{
                readerMode:true,
                controlsColor: Colors.bitiu,
                dismissButtonStyle:'close',
             });
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <SafeAreaView style={styles.screen}>
            <PortfolioItem item={item} show={false}/>
            {loading ==false ? (
                <View style={styles.contChart}>
                    <Chart data={points}/>
                </View> 
            ) : <View style={{flex:1,justifyContent:'center'}}><ActivityIndicator size="small" color="#0000ff"/></View>}    
            <View style={styles.contBtn}>
                <TouchableOpacity style={styles.btn} onPress={() => goWeb(item.twitterUrl)}>
                    <Image source={ require('../assets/twitter.png')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => goWeb(item.websiteUrl)}>
                    <Image source={ require('../assets/web.png')} style={styles.img} />
                </TouchableOpacity>
            </View>
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
        marginTop:30,
        marginBottom:10,
        marginLeft:10,
        color:Colors.subtitle
    },
    contBtn:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:30
    },
    btn:{
        borderWidth:1,
        borderRadius:8,
        borderColor: Colors.border,
        paddingHorizontal:5,
        paddingVertical:5,
        width:50,
        height:50,
        marginRight:10
    },
    img:{
        flex:1, 
        height:null, 
        width:null
    },
    contChart:{
        marginHorizontal:20, 
        marginVertical:10
    }
});

export default Details;