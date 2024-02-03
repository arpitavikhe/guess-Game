import {StyleSheet, View, Dimensions} from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: deviceWidth > 480 ? 40 :60,
        padding:20,
        backgroundColor: Colors.primary500,
        width: '95%',
        borderRadius: 6,
        shadowColor: ' #e4d5b7',
        shadowOffset: {width: 2, height: 3},
        shadowRadius: 5,
        shadowOpacity: 0.9,

    },
});
