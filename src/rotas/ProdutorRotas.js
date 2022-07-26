import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from "../telas/Produtor";
import Home from "../telas/Home";



const stack = createNativeStackNavigator()

export default function ProdutorRotas({ComponentePrincipal = Home}){
    return(
    <stack.Navigator>
        <stack.Screen name='HomeScreen' component={ComponentePrincipal}/>
        <stack.Screen name='Produtor' component={Produtor}/>
    </stack.Navigator>

    )
}