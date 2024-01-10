import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import bgImage from '../assets/img/2.jpg';
import loadStyles from '../styles';

const styles = loadStyles().HomeScreen;

type ItemData = {
  id: string;
  nome: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  color: string;
};

const Item = ({item, onPress, backgroundColor, color}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{backgroundColor}, {padding: 10, borderRadius: 15, marginTop: 10}]}>
    <Text style={{color, textAlign: 'left', textTransform: 'uppercase'}}>
      {item.nome}
    </Text>
  </TouchableOpacity>
);

const RenderItem = ({
  item,
  index,
}: {
  item: ItemData;
  index: number;
}): React.JSX.Element => {
  return (
    <Item
      item={item}
      onPress={item.onPress}
      backgroundColor={index % 2 === 0 ? '#DC1130' : '#000'}
      color="#fff"
    />
  );
};

const HomeScreen = ({navigation, route}) => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://angolaapi.onrender.com/api/v1/geography/provinces',
        );
        const data = await response.json();
        setProvinces(data);
        console.log('data--', data);
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
          style={[styles.backgroundContainer, {height: '100%'}]}
          source={bgImage}
          imageStyle={styles.backgroundImageStyle}>
          <View style={styles.overlay}>
            <Text style={styles.tinyText}>Um dos </Text>
            <Text style={styles.mediumText}>Maiores De Africa</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.dataListContainer}>
        <ScrollView>
          {provinces.map((item, index) => (
            <RenderItem
              item={{
                onPress: () => {
                  navigation.navigate('Details', {
                    item,
                    index,
                    states: item.municipios,
                  });
                },
                id: item?.id,
                nome: item?.nome,
              }}
              index={index}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
