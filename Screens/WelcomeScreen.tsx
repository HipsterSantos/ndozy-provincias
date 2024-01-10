import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import bgImage from '../assets/img/1.jpg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import loadStyles from '../styles';

const styles = loadStyles().WelcomeScreen;

export default function WelcomeScreen({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleOnPress = event => {
    navigation.navigate('Main', {provinces: []});
  };
  return (
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
  );
}
