import React,{useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { getFontSize } from "../constants/textResponsive";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import * as homeActions from '../store/actions/HomeActions';
import PortfolioList from "../components/PortfolioList";


const Home = ({navigation}) => {

    const cryptoData = useSelector(
        (state) => state.home.cryptoData
    );

    const index = useSelector((state) => state.home.index);
    const loading = useSelector((state) => state.home.loading);


        const dispatch = useDispatch();

        const loadData = () => {
            try {
                dispatch(homeActions.fetchCrypto())
            } catch (e) {
                console.log(e)
            }
        }
        useEffect(() => {
            loadData();
        },[index])

    return(
        <SafeAreaView style={styles.screen}>
            <Header />
            <Text style={styles.subtitle}>Lista de criptomonedas</Text>
            <PortfolioList mycoins={cryptoData}  navigation={navigation} data={cryptoData[index]}/>
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

export default Home;