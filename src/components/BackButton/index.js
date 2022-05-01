import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

const BackButton = ({ componentId }) => {
  return (
    <View style={styles.backButton}>
      <TouchableOpacity onPress={() => Navigation.pop(componentId)}>
        <Icon color="black" name="arrow-back-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
