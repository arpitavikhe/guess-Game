import {View, Image, Text, StyleSheet, ScrollView,Dimensions, useWindowDimensions} from 'react-native'
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
     const {width, height} = useWindowDimensions();

     let imageSize = 400;

     if(width < 580){
         imageSize = 320;
     }

     if(height < 400){
         imageSize =150;
     }

     const imageStyle={
         width: imageSize,
         height: imageSize,
     }


    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title >Game Over</Title>
            <View style={[styles.imageContainer , imageStyle]}>
                <Image style={styles.image} source={require('../assets/download-removebg-preview.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text
                style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text
                style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    screen:{
        flex: 1,
    },

    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        textAlign: 'center'
    },

    imageContainer: {
        // backgroundColor:'red',
        // width: deviceWidth < 380 ? 250 : 400,
        // height: deviceWidth < 380 ? 200 : 300,
        // borderRadius:50,
        // overflow:'hidden',

        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '70%',
        height: '50%',
    },
    summaryText: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 30,
    },
    highlight: {
        fontWeight: 'bold',
        color: 'brown',
    }

})
