import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';

export default function ChoseNumberComp({ setChosedNumber }) {
    const [inputVal, setInputVal] = React.useState(null);

    const handlePress = () => {
        inputVal && setChosedNumber(inputVal);
    };

    return (
        <View
            style={{
                paddingHorizontal: 20,

                justifyContent: 'center',
                flex: 1,
            }}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 30,

                    paddingVertical: 30,
                    gap: 30,
                }}
            >
                <Text
                    style={{
                        fontWeight: 700,
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                >
                    Chose Your Number
                </Text>

                <TextInput
                    placeholder='Your Random Number'
                    style={{
                        borderRadius: 10,
                        borderColor: 'gray',
                        padding: 15,
                        borderWidth: 2,
                    }}
                    onChangeText={(val) => setInputVal(val)}
                    returnKeyType='done'
                    keyboardType='decimal-pad'
                    autoCorrect={false}
                />

                <Pressable
                    style={{
                        backgroundColor: 'purple',
                        padding: 15,
                        justifyContent: 'center',
                        borderRadius: 10,
                    }}
                    onPress={handlePress}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Guess It 🫣
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
