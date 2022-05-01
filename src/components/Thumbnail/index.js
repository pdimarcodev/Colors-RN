import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const Thumbnail = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(item)}>
        <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Thumbnail;
