import { Platform } from 'react-native';
import { getColorFromURL } from 'rn-dominant-color';

export const getImageColors = async uri => {
  const { primary, secondary, background } = await getColorFromURL(uri);

  return [
    Platform.OS === 'android' ? primary : background,
    Platform.OS === 'android' ? secondary : '#FFFFFF',
  ];
};
