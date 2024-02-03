import {View, Text, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.color}>#{roundNumber}</Text>
            <Text style={styles.color}>Opponent's Guess : {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary500,
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
        marginVertical: 5,
        backgroundColor: Colors.primary600,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',


    },
    color: {
        color: 'black',
    }
})
