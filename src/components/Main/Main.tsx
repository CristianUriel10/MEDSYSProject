import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Navigation} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import Gallery from '../Gallery/Gallery';

// Actions
import {
  actionGetUsers,
  actionGetAlbumsByUser,
} from '../../redux/Album/album.actions';

// Selectors
import {
  getListUsers,
  getAlbumByUsers,
  getLoadingStatus,
} from '../../redux/Album/album.selectors';

interface User {
  id: string;
  name: string;
}

interface Album {
  id: string;
  title: string;
}

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const listUser = useSelector(getListUsers);
  const albumByUSer = useSelector(getAlbumByUsers);
  const loading = useSelector(getLoadingStatus);
  const [activeGallery, setActiveGallery] = useState(false);
  const [idGallery, setIdGallery] = useState('');
  const [titleGallery, setTitleGallery] = useState('');

  useEffect(() => {
    dispatch(actionGetUsers());
  }, [dispatch]);

  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const toggleCollapse = (userId: string) => {
    dispatch(actionGetAlbumsByUser(userId));
    setOpenSectionId(prevId => (prevId === userId ? null : userId));
  };

  const moveToGallery = (id: string, title: string) => {
    setActiveGallery(true);
    setIdGallery(id);
    setTitleGallery(title);
  };

  return (
    <View style={{height: '100%'}}>
      {activeGallery ? (
        <Gallery id={idGallery} title={titleGallery} setActiveGallery={setActiveGallery} />
      ) : (
        <ScrollView>
          <View
            style={{
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 20,
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              Users
            </Text>
          </View>
          {listUser?.map((item: User) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => toggleCollapse(item.id)}
                style={{
                  borderColor: 'black',
                  borderStyle: 'solid',
                  borderWidth: 0.4,
                  padding: 5,
                }}>
                <Text style={{fontSize: 23, fontWeight: '600'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>

              <Collapsible
                collapsed={openSectionId !== item.id}
                style={{marginLeft: 50}}>
                {loading ? (
                  <Text>Loading....</Text>
                ) : (
                  albumByUSer?.map((item: Album) => (
                    <TouchableOpacity
                      onPress={() => moveToGallery(item.id, item.title)}
                      key={item.id}
                      style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: 0.4,
                        padding: 5,
                      }}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  ))
                )}
              </Collapsible>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Main;
