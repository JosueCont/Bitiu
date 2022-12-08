import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getFontSize } from "../constants/textResponsive";
import Colors from "../constants/Colors";

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>BitiU</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.bitiu
    },
    title:{
        fontSize: getFontSize(30),
        color:'white',
    },
});

export default Header;