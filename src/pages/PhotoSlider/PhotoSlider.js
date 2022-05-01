import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import {
  BackButton,
  GradientBackground,
  PhotoCard,
  Spinner,
} from '../../components';
import { getImageColors } from '../../helpers/getColors';
import { rgbToHsl } from '../../helpers/rgbToHsl';
import { styles } from './style';
import theme from '../../theme';

const { width: windowWidth } = Dimensions.get('window');

export const PhotoSlider = ({ id, componentId }) => {
  const { photos } = useSelector(store => store.photos);
  const [indexedPhotos, setIndexedPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [textColor, setTextColor] = useState(theme.colors.text.primary);

  const [colors, setColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [l] = useMemo(() => rgbToHsl(colors.primary), [colors]);

  const getPhotoColors = async index => {
    const [primary = 'green', secondary = 'orange'] = await getImageColors(
      indexedPhotos[index].thumbnailUrl,
    );
    setPrevColors(colors);
    setColors({ primary, secondary });
  };

  // workaround for scrollInitialIndex not working
  useEffect(() => {
    if (photos.length) {
      const index = id - photos[0].id;
      setIndexedPhotos(photos.slice(index).concat(photos.slice(0, index - 1)));
    }
  }, [photos, id]);

  useEffect(() => {
    if (indexedPhotos.length) {
      getPhotoColors(0);
    }
  }, [indexedPhotos]);

  useEffect(() => {
    setTextColor(
      l < 0.5 ? theme.colors.text.primary : theme.colors.text.inverse,
    );
  }, [colors]);

  if (!photos.length || !indexedPhotos.length) {
    return <Spinner />;
  }

  return (
    <GradientBackground colors={colors} prevColors={prevColors}>
      <BackButton componentId={componentId} />
      <View style={[styles.titleContainer, { width: windowWidth }]}>
        <Text style={[styles.title, { color: textColor }]}>
          {photos[activeIndex].title}
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <Carousel
            data={indexedPhotos}
            renderItem={({ item }) => <PhotoCard item={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            loop
            onSnapToItem={index => {
              setActiveIndex(index);
              getPhotoColors(index);
            }}
          />
        </View>
      </View>
    </GradientBackground>
  );
};
