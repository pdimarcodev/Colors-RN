import React from 'react';
import { View } from 'react-native';
import { Divider } from '../../components';
import theme from '../../theme';

const MenuItemFooter = () => {
  return (
    <>
      <Divider />
      <View style={{ marginBottom: theme.spacings.XXL }} />
    </>
  );
};

export default MenuItemFooter;
