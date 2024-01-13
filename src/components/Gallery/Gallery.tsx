import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
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

const Gallery: React.FC = ({id, title, setActiveGallery}) => {
  const dispatch = useDispatch();
  const albumPhotos = useSelector(getAlbumPhotos);
  const allPhotos = useSelector(getAllPhotos);
  const loading = useSelector(getLoadingStatus);

  const [allPhotosActive, setAllPhotosActive] = useState(false);

  useEffect(() => {
    dispatch(actionGetAlbumPhotos(id));
  }, [dispatch]);

  const numRows = Math.ceil(albumPhotos?.length / 3);

  const rows = Array.from({length: numRows}, (_, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {allPhotosActive
        ? allPhotos
            ?.slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((source, index) => (
              <Image
                key={index}
                source={{uri: source?.url}}
                style={styles.image}
              />
            ))
        : albumPhotos
            ?.slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((source, index) => (
              <Image
                key={index}
                source={{uri: source?.url}}
                style={styles.image}
              />
            ))}
    </View>
  ));

  return (
    <View style={{height: '100%'}}>
      <View style={styles.ratingContainer}>
        <TouchableOpacity
          onPress={() => setActiveGallery(false)}
          style={{paddingBottom: 20, marginTop: 70, paddingLeft: 10}}>
          <Image
            style={styles.image2}
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
            paddingBottom: 20,
            marginTop: 70,
            width: '70%',
            overflow: 'hidden',
          }}
          numberOfLines={1}>
          {allPhotosActive ? 'All photos' : title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setAllPhotosActive(!allPhotosActive);
            dispatch(actionGetAllPhotos());
          }}
          style={{paddingBottom: 20, marginTop: 70, paddingRight: 10}}>
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
        <Text style={{textAlign: 'center', fontSize: 30}}>Loading........</Text>
      ) : (
        <ScrollView>{rows}</ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '33%',
    height: 120,
    resizeMode: 'cover',
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Gallery;
