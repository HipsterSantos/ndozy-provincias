import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    WelcomeScreen: {
      mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
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
        borderRadius: 25,
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
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundContainer: {
        width: '100%',
        height: '25%',
        // backgroundColor: 'blue'
      },
      dataListContainer: {
        flex: 5,
        paddingTop: 10,
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
        paddingTop: 50,
      },
      scrollView: {
        width: '100%',
      },
      touchableOpacity: {
        width: 300,
        padding: 30,
        borderRadius: 15,
        marginTop: 20,
      },
      tinyText: {
        fontSize: 20,
        paddingLeft: 20,
        color: 'white',
        textAlign: 'left',
        alignSelf: 'left',
      },
      mediumText: {
        paddingLeft: 20,
        fontSize: 30,
        alignSelf: 'left',
        color: '#fff',
      },
    },
    DetailsScreen: {
      mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      },
      backgroundContainer: {
        width: '100%',
        height: '25%',
        // backgroundColor: 'blue'
      },
      overlay: {
        flex: 1,
        width: '100%',
        borderEndEndRadius: 80,
        backgroundColor: '#DC1130',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },
      line: {},
      scrollView: {
        padding: 5,
      },
      scrollContainer: {
        marginTop: 5,
        width: '100%',
        padding: 20,
      },
      largeText: {
        fontSize: 20,
        width: '100%',
      },
      tinyText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'left',
      },
      mediumText: {
        alignSelf: 'left',
        fontSize: 30,
        color: '#fff',
      },
    },
  });
