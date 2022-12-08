import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight, Modal } from "react-native";
import Colors from "../constants/Colors";
import { getFontSize } from "../constants/textResponsive";
import { Ionicons } from "@expo/vector-icons";


const PortfolioItem = ({item, show, selected}) => {

    return(
        <View style={styles.contCard}>
            <View style={styles.sectionIcon}>
                <Image 
                    source={{uri: item.icon}} 
                    style={styles.img}
                />
                <View>
                    <Text style={styles.lbl}>{item.name}</Text>
                    <Text style={styles.lbl}>${item.price.toLocaleString(undefined,{
                        minimumFractionDigits:3,
                        maximumFractionDigits:3
                    })} MNX</Text>

                </View>
            </View>
            {show ? (
                <TouchableHighlight underlayColor='#FAFBFE' onPress={selected}>
                <Ionicons size={35}  name="ios-information-circle-outline" />

            </TouchableHighlight>
            ): null}
            
        </View>
    )
};

const styles = StyleSheet.create({
    contCard:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30,
        marginTop:20,
        justifyContent:'space-between'
    },
    sectionIcon:{
        flexDirection:'row',
        alignItems:'center'
    },
    lbl:{
        fontSize:getFontSize(15),
        color:Colors.darkGray
    },
    img:{
        width: 40,
        height:40,
        marginRight:5,
        borderColor: Colors.border, 
        marginRight:15
    }
})

export default PortfolioItem;