import React from 'react';
import {View} from 'react-native';

export const BottomLine = ({color, thickness, length, styles}) => {
  const lineStyle = {
    backgroundColor: color || 'black',
    height: thickness || 1,
    width: length || '100%',
  };

  return <View style={[styles.line, lineStyle]} />;
};
