/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { pagesNames, registerPages } from './src/navigation';

const store = configureStore();

registerPages(Provider, store);

Navigation.events().registerAppLaunchedListener(() =>
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: pagesNames.PHOTO_SLIDER,
            },
          },
          {
            component: {
              name: pagesNames.PHOTOS,
            },
          },
          {
            component: {
              name: pagesNames.ALBUMS,
            },
          },
        ],
      },
    },
  }),
);
