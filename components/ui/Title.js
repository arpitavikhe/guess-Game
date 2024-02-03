import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from "../../constants/Colors";

export default function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>

    );
}

const deviceWidth= Dimensions.get('window').width

const styles = StyleSheet.create({
    title: {

        fontSize: 25,
        fontWeight: 'bold',
        color: '#573d26',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: Colors.primary500,
        padding: 10,
        margin: deviceWidth > 480 ? 0 :10,
        alignItems: 'center',
        marginTop: deviceWidth > 480 ? 12 : 90,

        maxWidth: '80%',
        width:300,
    }
})
