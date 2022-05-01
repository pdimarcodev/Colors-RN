import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  titleContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? 80 : 160,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: theme.spacings.M,
    textAlign: 'center',
  },
});
