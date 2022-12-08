import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight, Modal, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { getFontSize } from "../constants/textResponsive";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser';


const NewItem = ({item}) => {

    const handleNewPress = async(url) => {
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
        <View style={styles.contCard}>
            <Image 
                source={{uri: item.imageURL}}  
                style={styles.img}
            />
            <Text style={styles.lbl}>{item.title}</Text>
            <View style={styles.contFooterCard}>
                <Text style={styles.txtSource}>{item.source}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => handleNewPress(item.link)}>
                    <Text style={styles.txtNota}>Ir a la nota</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contCard:{
        borderWidth:1,
        borderRadius:8,
        borderColor: Colors.border,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:15,
    },
    lbl:{
        fontSize:getFontSize(15), 
        fontWeight:'300'
    },
    img:{
        flex: 1,
        aspectRatio: 1.5, 
        resizeMode: 'contain',
        marginBottom:5,
    },
    contFooterCard:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15,
        alignItems:'center'
    },
    btn:{
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:5,
        backgroundColor:Colors.darkGray
    },
    txtNota:{
        fontSize:getFontSize(13),
        color:'white'
    },
    txtSource:{
        fontSize:getFontSize(13),
        color:Colors.darkGray
    }
});

export default NewItem;