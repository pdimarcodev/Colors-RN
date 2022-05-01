import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: StatusBar.currentHeight ? theme.spacings.XXXL : 70,
    left: theme.spacings.M,
  },
});
