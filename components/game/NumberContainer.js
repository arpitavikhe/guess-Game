import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from "../../constants/Colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#573d26',
        paddingHorizontal: deviceWidth < 350 ? 30:50,
        paddingVertical: deviceWidth < 350 ? 10:20,
        margin: deviceWidth < 350 ? 10:20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary500,

    },
    numberText: {
        color: 'rgb(246,229,213)',
        fontSize: 50,
        fontWeight: 'bold',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
    }

})
