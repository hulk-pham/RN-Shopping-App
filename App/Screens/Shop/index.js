import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Helpers from 'App/Theme/Helpers';
import React from 'react';
import Colors from '../../Theme/Colors';
import Header from './Component/Header';
import ShopDetail from './IndexScreen';


const Stack = createStackNavigator();
export default function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        // headerShown: false,
        headerStyle: Helpers.headerStyle,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Index" component={ShopDetail}
        options={{
          headerTransparent: true,
          headerStyle: {
            height: 50,
          },
          headerLeft: () => <Header />,
          headerRight: null,
        }}
      // options={{
      //   // headerTransparent: true,
      //   titleStyle: {
      //     // color: 'white'
      //   },
      //   headerTintColor: 'white',
      //   headerTitle: "Something",
      // }}
      />
    </Stack.Navigator>
  )
}


const style = {
  searchButton: {
    color: Colors.redOrange,
    fontSize: 22,
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
}