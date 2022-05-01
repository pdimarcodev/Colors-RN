import { Navigation } from 'react-native-navigation';
import keyMirror from 'keymirror';
import Albums from '../pages/Albums';
import Photos from '../pages/Photos';
import PhotoSlider from '../pages/PhotoSlider';

export const pagesNames = keyMirror({
  ALBUMS: null,
  PHOTOS: null,
  PHOTO_SLIDER: null,
});

const routes = [
  { name: pagesNames.ALBUMS, componentClassFunc: Albums },
  { name: pagesNames.PHOTOS, componentClassFunc: Photos },
  { name: pagesNames.PHOTO_SLIDER, componentClassFunc: PhotoSlider },
];

export const registerPages = (provider, store) =>
  routes.forEach(page =>
    Navigation.registerComponentWithRedux(
      page.name,
      () => page.componentClassFunc,
      provider,
      store,
    ),
  );
