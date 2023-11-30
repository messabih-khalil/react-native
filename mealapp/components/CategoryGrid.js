import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CategoryGrid = ({ title, color }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'green',
                height: 150,
                margin: 16,
            }}
        >
            <Pressable
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
                onPress={() =>
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })
                }
            >
                <View style={{ backgroundColor: color }}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGrid;
