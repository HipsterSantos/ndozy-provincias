import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    WelcomeScreen: {
      mainContainer: {
        width: '100%',
        height: '100%',
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
        // height: '20%',
        marginTop: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        color: 'white',
        backgroundColor: '#E11131',
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      headerText: {
        color: '#fff',
        fontSize: 35,
        width: 160,
        padding: 20,
      },
    },
    HomeScreen: {
      mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundContainer: {
        width: '100%',
        height: '25%',
        // backgroundColor: 'blue'
      },
      dataList: {
        flex: 4,
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
        alignItems: 'center',
      },
      tinyText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left'
      },
      mediumText: {
        fontSize: 30,
        color: '#fff'
      },
    },
    DetailsScreen: {},
  });
