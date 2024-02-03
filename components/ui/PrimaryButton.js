import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({children, onPress}) {


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <Text style={styles.textContainer}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        textAlign: 'center',
        fontSize: 20,
    },
    buttonOuterContainer: {

        // overflow:'hidden',
        margin: 5,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,

    },
    pressed: {
        opacity: 0.8,
    }
})

export default PrimaryButton;
