import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { getFontSize } from "../constants/textResponsive";

const TabBar =({ state, navigation }) => {
    return(
        <View style={styles.tabBar}>
            {state.routes.map((route,index) => {
                const focused = state.index === index;
                const isActions = route.name === 'Actions';
                const itemColor = focused ? Colors.bitiu : Colors.subtitle;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault:true
                    })

                    if(!focused && !event.defaultPrevented){
                        navigation.navigate(route.name)
                    }
                };

                let iconName;
                switch(route.name){
                    case 'Home':
                        iconName = "home";
                        break;
                    case 'Noticias': 
                        iconName = "newspaper";
                        break;
                    default:
                        iconName = "person";
                }

                const animatedValue = new Animated.Value(1);

                const onPressIn = () => {
                    Animated.spring(animatedValue,{
                        toValue:0.9,
                        useNativeDriver:true,
                    }).start();
                }

                const onPressOut = () => {
                    Animated.spring(animatedValue,{
                        toValue: 1,
                        useNativeDriver:true
                    }).start();
                }

                const animatedStyle = {
                    transform: [{ scale: animatedValue}]
                }
                
                return (
                    <Animated.View style={[styles.tabItem,animatedStyle]} key={route.name}>
                        <TouchableOpacity 
                            onPress={onPress}
                            onPressIn={onPressIn}
                            onPressOut={onPressOut}>
                                {
                                    isActions ? (
                                        <View style={styles.actionsButton}>
                                            <Ionicons name="swap-horizontal" size={20} color='white' />
                                        </View>
                                    ) : (
                                        <View style={{alignItems:'center'}}>
                                            <Ionicons name={iconName} size={20} color={itemColor} style={{marginBottom:2}}/>
                                            <Text style={[{color:itemColor},styles.tabBarText]}>{route.name}</Text>
                                        </View>
                                    )
                                }
                        </TouchableOpacity>
                    </Animated.View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        flexDirection:'row',
        height:70,
        borderColor:'white',
        borderTopColor: Colors.border,
        borderWidth:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    tabItem:{
        width:60,
    },
    tabBarText:{
        fontSize:getFontSize(14),
        fontWeight:'700'
    },
});

export default TabBar;