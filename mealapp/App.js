import { View, Text } from 'react-native';
import React from 'react';
import CategoryScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Categories'
                    component={CategoryScreen}
                    
                />
                <Stack.Screen
                    name='Details'
                    component={MealsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
