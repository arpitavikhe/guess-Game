import {
    Text,
    TextInput,
    View,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
    ScrollViewComponent
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from '../components/ui/Card'
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("")

    const {width, height} = useWindowDimensions();

    function InputTextHandler(val) {
        setEnteredNumber(val);
        console.log(val);
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', "Number has to a number between 1 to 99", [{
                text: 'Okay',
                style: 'default',
                onPress: resetInputHandler
            }])
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 480 ? 10 : 90;

    return (


            <View style={[styles.root, {marginTop: marginTopDistance}]}>

                <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a Number</InstructionText>
                    <TextInput style={styles.inputNumber}
                               maxLength={2}
                               keyboardType='number-pad'
                               onChangeText={InputTextHandler}
                               value={enteredNumber}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>

            </View>

    );
}
export default StartGameScreen;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    root: {
        // marginTop: deviceHeight > 380 ? 10 : 60,
        alignItems: 'center',
        paddingHorizontal: deviceHeight < 480 ? 30 : 10,

    },

    inputNumber: {
        height: 40,
        width: 50,
        textAlign: 'center',
        borderBottomWidth: 2,
        marginBottom: 10,
        borderBottomColor: Colors.primary600,
        fontSize: 35,
        color: Colors.primary600,
        fontWeight: 'bold',

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }

})



