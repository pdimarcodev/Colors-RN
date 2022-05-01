import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: theme.spacings.M,
  },
  itemText: {
    marginLeft: theme.spacings.XXL,
    fontSize: 19,
    color: theme.colors.text.secondary,
    maxWidth: '80%',
  },
  icon: {
    paddingRight: theme.spacings.XXL,
  },
});
