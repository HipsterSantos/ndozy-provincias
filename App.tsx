/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import bgImage from './assets/img/1.jpg';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  backgroundContainer: {
    height: '90%',
    marginBottom: 5,
  },
  background: {
    resizeMode: 'cover', // or 'stretch' for different cover options
    height: '100%',
  },
  backgroundImageStyle: {
    borderEndEndRadius: 80,
  },
  overlay: {
    flex: 1,
    width: '100%',
    borderEndEndRadius: 80,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red overlay with alpha
    justifyContent: 'center',
    alignItems: 'left',
  },

  btnContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
  },

  touchable: {
    width: '50%',
    height: '20%',
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  headerText: {
    color: '#fff',
    fontSize: 35,
    width: 160,
    padding: 20,
  },
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleOnPress = event => {};

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <View style={styles.mainContainer}>
          <View style={styles.backgroundContainer}>
            <ImageBackground
              source={bgImage}
              style={styles.background}
              imageStyle={styles.backgroundImageStyle}>
              <View style={styles.overlay}>
                <Text style={styles.headerText}>Angola País Grande e Belo</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.touchable} onPress={handleOnPress}>
              <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
