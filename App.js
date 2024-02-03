import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from "./Screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
// import { useFonts } from 'expo-font';

import {useState} from 'react';
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    // const [fontsLoaded] = useFonts({
    //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    // });


    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);

    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }


    return (
        <LinearGradient colors={['rgb(126,90,72)', 'rgb(248,215,183)', 'rgb(126,90,72)',]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/riho-kroll-RgLaH00kZOk-unsplash.jpg')}
                             resizeMode='cover'
                             style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}>{screen}</ImageBackground>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        alignItems: 'center',
        padding:0,
        margin:0,

    },
    backgroundImage: {
        opacity: 0.19,
    }
})
