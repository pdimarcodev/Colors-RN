import React, { useCallback, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BackButton, HeaderTitle, Thumbnail, Spinner } from '../../components';
import { retrievePhotos, resetPhotos } from '../../store/actions/photos';
import { pagesNames } from '../../navigation';

export const Photos = ({ id, title, componentId }) => {
  const dispatch = useDispatch();

  const { photos, loadingPhotos, error } = useSelector(store => store.photos);

  const navigateToPhotoSlider = useCallback(
    photo =>
      Navigation.push(componentId, {
        component: {
          name: pagesNames.PHOTO_SLIDER,
          passProps: {
            id: photo.id,
          },
        },
      }),
    [componentId],
  );

  useEffect(() => {
    dispatch(resetPhotos());
    dispatch(retrievePhotos(id));
  }, [dispatch, id]);

  if (loadingPhotos) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={photos}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Thumbnail item={item} onPress={navigateToPhotoSlider} />
          )}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <HeaderTitle title={title} textAlign={'center'} />
          }
        />
      </View>
      <BackButton componentId={componentId} />
    </SafeAreaView>
  );
};
