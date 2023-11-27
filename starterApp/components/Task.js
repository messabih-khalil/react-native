import { Pressable, Text , StyleSheet } from 'react-native';

const TaskComp = ({ item }) => {
    return (
        <Pressable style={styles.task}>
            <Text>{item.name}</Text>

            <Text>new</Text>
        </Pressable>
    );
};

export default TaskComp;

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
