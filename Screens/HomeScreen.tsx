import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import bgImage from '../assets/img/2.jpg';
import loadStyles from '../styles';

const styles = loadStyles().HomeScreen;

const HomeScreen = ({navigation, route}) => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://angolaapi.onrender.com/api/v1/geography/provinces',
        );
        const data = await response.json();
        setProvinces(data);
        console.log('data--', data)
      } catch (error) {
        console.error('Error while fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={[styles.backgroundContainer,{height: '100%'}]}
          source={bgImage}
          imageStyle={styles.backgroundImageStyle}>
          <View style={styles.overlay}>
            <Text style={styles.tinyText}>Um dos </Text>
            <Text style={styles.mediumText}>Maiores De Africa</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.dataList}>
        <FlatList
          data={provinces}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Text>{item.nome}</Text>}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
