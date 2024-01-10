import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import loadStyles from '../styles';
import {BottomLine} from '../Components/bottomline';

const styles = loadStyles().DetailsScreen;

export default function DetailsScreen({route}): React.JSX.Element {
  const [municipes, setMunicipes] = useState(JSON.parse(route.params.states));
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.overlay}>
          <Text style={styles.mediumText}>{route.params.item.nome}</Text>
          <Text style={styles.tinyText}>Municipios</Text>
        </View>
      </View>

      <View>
        <ScrollView style={styles.scrollView}>
          {municipes.map((item, index) => (
            <View style={styles.scrollContainer}>
              <Text style={styles.largeText}>{item}</Text>
              <BottomLine styles={styles} color="#DC1130" thickness={3} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
