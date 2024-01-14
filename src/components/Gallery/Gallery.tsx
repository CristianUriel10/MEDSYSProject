import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {
  actionGetAlbumPhotos,
  actionGetAllPhotos,
} from '../../redux/Album/album.actions';

// Selectors
import {
  getAlbumPhotos,
  getAllPhotos,
  getLoadingStatus,
} from '../../redux/Album/album.selectors';

// Styles
import {styles} from './styles';

interface GalleryProps {
  id: string; // Adjust the type of id based on your actual data type
  title: string; // Adjust the type of title based on your actual data type
  setActiveGallery: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery: React.FC<GalleryProps> = ({id, title, setActiveGallery}) => {
  const dispatch = useDispatch();
  const albumPhotos = useSelector(getAlbumPhotos);
  const allPhotos = useSelector(getAllPhotos);
  const loading = useSelector(getLoadingStatus);

  const [allPhotosActive, setAllPhotosActive] = useState(false);

  useEffect(() => {
    dispatch(actionGetAlbumPhotos(id));
  }, [dispatch, id]);

  const numRows = Math.ceil(albumPhotos?.length / 3);

  const rows = Array.from({length: numRows}, (_, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {allPhotosActive
        ? allPhotos
            ?.slice(rowIndex * 3, rowIndex * 3 + 3)
            .map(
              (
                source: {thumbnailUrl: any},
                index: React.Key | null | undefined,
              ) => (
                <Image
                  key={index}
                  source={{uri: source?.thumbnailUrl}}
                  style={styles.image}
                />
              ),
            )
        : albumPhotos
            ?.slice(rowIndex * 3, rowIndex * 3 + 3)
            .map(
              (
                source: {thumbnailUrl: any},
                index: React.Key | null | undefined,
              ) => (
                <Image
                  key={index}
                  source={{uri: source?.thumbnailUrl}}
                  style={styles.image}
                />
              ),
            )}
    </View>
  ));

  return (
    <View style={{height: '100%'}}>
      <View style={styles.ratingContainer}>
        <TouchableOpacity
          onPress={() => setActiveGallery(false)}
          style={styles.touchable}>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText} numberOfLines={1}>
          {allPhotosActive ? 'All photos' : title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setAllPhotosActive(!allPhotosActive);
            dispatch(actionGetAllPhotos());
          }}
          style={styles.touchable}>
          <Image
            style={styles.image2}
            source={{
              uri: allPhotosActive
                ? 'https://pngimg.com/uploads/star/star_PNG1595.png'
                : 'https://i.pinimg.com/originals/f0/bb/0d/f0bb0d3f884d8a915e2103648e1a1a8a.png',
            }}
          />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Text style={styles.text}>Loading........</Text>
      ) : (
        <ScrollView>{rows}</ScrollView>
      )}
    </View>
  );
};

export default Gallery;
