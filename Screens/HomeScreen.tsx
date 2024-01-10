import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Provinces:</Text>
      <FlatList
        data={provinces}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
