import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Spacer } from '../../components';
import theme from '../../theme';
import { styles } from './style';

const MenuItem = ({ menuItem, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
      <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
          {menuItem.title}
        </Text>
        <Spacer />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.text.secondary}
          size={23}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
