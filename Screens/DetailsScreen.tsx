import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import loadStyles from '../styles';

const styles = loadStyles().DetailsScreen;

const BottomLine = ({color, thickness, length}) => {
  const lineStyle = {
    backgroundColor: color || 'black',
    height: thickness || 1,
    width: length || '100%',
  };

  return <View style={[styles.line, lineStyle]} />;
};

export default function DetailsScreen({route}): React.JSX.Element {
  const [municipes, setMunicipes] = useState(JSON.parse(route.params.states));
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.overlay}>
          <Text style={styles.mediumn}>{route.params.item.nome}</Text>
          <Text style={styles.tinyText}>Municipios</Text>
        </View>
      </View>

      <View>
        <ScrollView>
          {municipes.map((item, index) => (
            <View style={styles.scrollContainer}>
              <Text style={styles.largeText}>{item}</Text>
              <BottomLine color="#DC1130" thickness={3} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
