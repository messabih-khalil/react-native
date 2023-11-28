import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';
import { generateRandom } from '../utils/generateRandom';

export default function GeneratedRandomNumComp({
    setRandomNum,
    randomNum,
    loseCounter,
    setLoseCounter,
    setAlreadyGussed,
    alreadyGuessed,
    chosedNumber,
}) {
    //
    const alert = (number) => {};

    //
    const handleGenerateAnotherNumber = (state) => {
        setLoseCounter((prev) => prev + 1);

        if (state == 'lower') {
            if (alreadyGuessed[alreadyGuessed.length - 1] < chosedNumber) {
                return Alert.alert('Lier Boy 🫣', 'Your Number is higher', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            }

            let rnd = generateRandom(
                1,
                alreadyGuessed[alreadyGuessed.length - 1]
            );

            while (alreadyGuessed.includes(rnd)) {
                rnd = generateRandom(
                    1,
                    alreadyGuessed[alreadyGuessed.length - 1]
                );
            }

            setRandomNum(rnd);
            setAlreadyGussed((prev) => [...prev, rnd]);
        } else {
            if (alreadyGuessed[alreadyGuessed.length - 1] > chosedNumber) {
                return Alert.alert('Lier Boy 🫣', 'Your Number is lower', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            }
            let rnd = generateRandom(
                alreadyGuessed[alreadyGuessed.length - 1],
                99
            );

            while (alreadyGuessed.includes(rnd)) {
                rnd = generateRandom(
                    alreadyGuessed[alreadyGuessed.length - 1],
                    99
                );
            }
            setRandomNum(rnd);

            setAlreadyGussed((prev) => [...prev, rnd]);
        }
    };

    return (
        <View
            style={{
                paddingHorizontal: 20,
                marginTop: 20,
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
                        fontWeight: 'bold',
                        fontSize: 25,
                        textAlign: 'center',
                    }}
                >
                    Robot 🤖 Guessed number
                </Text>

                <Text
                    style={{
                        fontWeight: 600,
                        fontSize: 30,
                        textAlign: 'center',
                    }}
                >
                    {randomNum}
                </Text>

                {/* Buttons */}

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 15,
                    }}
                >
                    <Pressable
                        style={{
                            flex: 1,
                            backgroundColor: 'red',

                            padding: 15,
                            borderRadius: 10,
                        }}
                        onPress={() => handleGenerateAnotherNumber('lower')}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Lower
                        </Text>
                    </Pressable>

                    <Pressable
                        style={{
                            flex: 1,
                            padding: 15,
                            borderRadius: 10,
                            backgroundColor: 'green',
                        }}
                        onPress={() => handleGenerateAnotherNumber('higher')}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Higher
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
