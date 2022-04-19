import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HOME_SCREEN } from '../router';


function SplashScreen({ navigation }) {
    React.useEffect(() => {
        const timerId = setInterval(() => {
            navigation.navigate(HOME_SCREEN)
        }, 1000)
        return () => clearInterval(timerId);
    }, [])
    return (
        //Splash screen design
        <View style={styles.container}>
            <Text style={styles.text}>Romantic Comedy</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default SplashScreen