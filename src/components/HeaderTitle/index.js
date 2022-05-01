import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

const HeaderTitle = ({ title, textAlign = 'left' }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign }]}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
