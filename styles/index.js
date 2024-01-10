import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    WelcomeScreen: {
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
    },
    HomeScreen: {},
    DetailsScreen: {},
  });
