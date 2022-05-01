import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './style';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={25} color="blue" />
    </View>
  );
};

export default Spinner;
