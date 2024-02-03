import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.primary600,
        fontSize: 25,
        marginBottom: 20,

    },
})

