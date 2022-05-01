import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './style';

const PhotoCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );
};

export default PhotoCard;
