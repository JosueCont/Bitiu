import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PortfolioItem from "./PortfolioItem";

import { useSelector, useDispatch } from "react-redux";
import * as homeActions from '../store/actions/HomeActions';



const PortfolioList = ({mycoins, navigation, data}) => {
    const dispatch = useDispatch();

    return(
        <View style={styles.cont}>
            <FlatList 
                data={mycoins}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item,index}) => {
                    return(
                        <PortfolioItem 
                            item={item}  
                            show={true} 
                            selected={() => {
                                dispatch(homeActions.chooseDetail(index)); 
                                navigation.navigate('Detalle', item)
                            }}
                        />
                    )
                }}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    cont:{
        width:380,
        flex:1,
        alignSelf:'flex-start',
    },
});

export default PortfolioList;