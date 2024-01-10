import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
type ItemData = {
  id: string;
  nome: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  color: string;
  styles: any
};

const Item = ({item, onPress, backgroundColor, color,styles}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{backgroundColor}, styles.touchableOpacity]}>
    <Text style={{color, textAlign: 'left', textTransform: 'uppercase'}}>
      {item.nome}
    </Text>
  </TouchableOpacity>
);

export const RenderItem = ({
  item,
  index,
  styles,
}: {
  item: ItemData,
  index: number,
  styles: any
}): React.JSX.Element => {
  return (
    <Item
      styles={styles}
      item={item}
      onPress={item.onPress}
      backgroundColor={index % 2 === 0 ? '#DC1130' : '#000'}
      color="#fff"
    />
  );
};
