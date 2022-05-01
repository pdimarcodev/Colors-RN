import React, { useEffect, useCallback } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { pagesNames } from '../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveAlbums } from '../../store/actions/albums';
import {
  MenuItem,
  Divider,
  HeaderTitle,
  MenuItemFooter,
  Spinner,
} from '../../components';

export const Albums = props => {
  const dispatch = useDispatch();

  const { albums, loadingAlbums, error } = useSelector(store => store.albums);

  useEffect(() => {
    dispatch(retrieveAlbums());
  }, [dispatch]);

  const navigateToPhotos = useCallback(
    album =>
      Navigation.push(props.componentId, {
        component: {
          name: pagesNames.PHOTOS,
          passProps: {
            id: album.id,
            title: album.title,
          },
        },
      }),
    [props.componentId],
  );

  if (loadingAlbums) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <MenuItem menuItem={item} onPress={() => navigateToPhotos(item)} />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <HeaderTitle title={'Albums'} />}
        ListFooterComponent={() => <MenuItemFooter />}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
