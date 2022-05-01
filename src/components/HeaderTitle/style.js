import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || theme.spacings.XXL,
    paddingBottom: theme.spacings.XXL,
    paddingHorizontal: theme.spacings.XXL,
    backgroundColor: theme.colors.bg.primary,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: theme.spacings.M,
  },
});
