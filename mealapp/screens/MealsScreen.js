import { View, Text } from 'react-native';
import React from 'react';

const MealsScreen = ({ route }) => {
    const data = route.params;

    return (
        <View>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};

export default MealsScreen;
