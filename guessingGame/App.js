import { View, Text, SafeAreaView, StatusBar, Pressable } from 'react-native';
import React, { useState } from 'react';
import ChoseNumberComp from './components/ChoseNumberComp';
import GeneratedRandomNumComp from './components/GeneratedRandomNumComp';
import { generateRandom } from './utils/generateRandom';
const App = () => {
    const [chosedNumber, setChosedNumber] = useState(null);

    // handle on change input

    const [randomNum, setRandomNum] = useState(generateRandom(1, 99));

    const [loseCounter, setLoseCounter] = useState(1);

    const [alreadyGuessed, setAlreadyGussed] = useState([randomNum]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'purple',
            }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                }}
            >
                {/* Chose number */}

                {!chosedNumber ? (
                    <ChoseNumberComp setChosedNumber={setChosedNumber} />
                ) : (
                    <View style={{ flex: 1 }}>
                        <GeneratedRandomNumComp
                            setRandomNum={setRandomNum}
                            randomNum={randomNum}
                            loseCounter={loseCounter}
                            setLoseCounter={setLoseCounter}
                            setAlreadyGussed={setAlreadyGussed}
                            alreadyGuessed={alreadyGuessed}
                            chosedNumber={chosedNumber}
                        />

                        <Text
                            style={{
                                color: 'white',
                                flex: 1,
                                textAlign: 'center',
                            }}
                        >
                            {JSON.stringify(alreadyGuessed)}
                        </Text>

                        <Text
                            style={{
                                color: 'white',
                                marginBottom: 20,
                                textAlign: 'center',
                            }}
                        >
                            {parseInt(randomNum) === parseInt(chosedNumber)
                                ? 'You Guessed it'
                                : 'opps try again'}
                        </Text>
                    </View>
                )}
            </SafeAreaView>
        </View>
    );
};

export default App;
