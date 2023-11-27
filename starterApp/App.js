import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    SafeAreaView,
    Pressable,
    ScrollView,
    FlatList,
} from 'react-native';

import TaskComp from './components/Task';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [inputValue, setValue] = useState('');
    const handleChange = (value) => {
        setValue(value);
    };

    const handleAdd = () => {
        setGoals((prev) => [
            ...prev,
            { id: Math.random().toString(), name: inputValue, done: false },
        ]);

        setValue('');
    };

    const handleDone = (id) => {
        const objIndex = goals.findIndex((obj) => obj.id === id);

        goals[objIndex].done = !goals[objIndex].done;

        console.log('====================================');
        setGoals([...goals]);
        console.log('====================================');
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Your today goals'
                        style={styles.input}
                        onChangeText={handleChange}
                        defaultValue={inputValue}
                    />
                    <Button
                        title='Add Now 🤗'
                        onPress={handleAdd}
                    />
                </View>

                <View style={styles.taskBox}>
                    <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={goals}
                        renderItem={(items) => {
                            return <TaskComp item={items.item} />;
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        gap: 20,
        flex: 1,
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
    },
    taskBox: {
        flex: 3,
        gap: 10,
    },

    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'green',
        borderBottomWidth: 2,
        flex: 1,
    },
    task: {
        padding: 10,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
