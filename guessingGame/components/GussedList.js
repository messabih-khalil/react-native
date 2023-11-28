export const GuessedList = ({ guessedNumber }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView>
                <View style={{ gap: 10 }}>
                    {guessedNumber.map((el, index) => {
                        return (
                            <View
                                key={el}
                                style={{
                                    padding: 20,
                                    borderRadius: 10,
                                    backgroundColor: 'gray',
                                }}
                            >
                                <Text style={{ color: 'white' }}>
                                    {index + 1} Guessed Number : {el}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
