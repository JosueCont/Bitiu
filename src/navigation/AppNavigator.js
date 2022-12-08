import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import Home from "../screens/Home";
import News from "../screens/News";
import Details from "../screens/Details";
import Header from "../components/Header";
import Colors from "../constants/Colors";

const TabBarNavigator = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();




const TabNavigation = () => {
    return(
        <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props}/>}>
            <TabBarNavigator.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <TabBarNavigator.Screen name="Noticias" component={News} options={{headerShown:false}}/>
        </TabBarNavigator.Navigator>
    )
};

const HomeNavigator = () => {
    return(
        <HomeStackNavigator.Navigator initialRouteName='Inicio'>
            <HomeStackNavigator.Screen name="Inicio" component={TabNavigation} options={{headerShown:false}}/>
            <HomeStackNavigator.Screen 
                name="Detalle" 
                component={Details} 
                options={({route}) => ({
                    headerStyle: {
                        backgroundColor: Colors.bitiu,  
                    },
                    headerTintColor: 'white',
                    title: route.params.name
                    }
                )}
            />
        </HomeStackNavigator.Navigator>
    ) 
};

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    )
};

export default AppNavigator;