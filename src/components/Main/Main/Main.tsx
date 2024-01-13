import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { actionGetUsers, actionGetAlbumsByUser } from '../../../redux/Album/album.actions';

// Selectors
import { getListUsers, getAlbumByUsers, getLoadingStatus } from '../../../redux/Album/album.selectors';

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

  useEffect(() => {
    dispatch(actionGetUsers());
  }, [dispatch]);

  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const toggleCollapse = (userId: string) => {
    dispatch(actionGetAlbumsByUser(userId));
    setOpenSectionId((prevId) => (prevId === userId ? null : userId));
  };

  return (
    <ScrollView>
      <View style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: 1, padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Users</Text>
      </View>
      {listUser?.map((item: User) => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => toggleCollapse(item.id)} style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: .4, padding: 5 }}>
            <Text style={{ fontSize: 23, fontWeight: '600' }}>{item.name}</Text>
          </TouchableOpacity>

          <Collapsible collapsed={openSectionId !== item.id} style={{marginLeft: 100}}>
            {loading ? <Text>Cargando....</Text> :
            albumByUSer?.map((item: Album) => (
              <View key={item.id} style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: .4, padding: 5 }}>
                <Text>{item.title}</Text>
              </View>
            ))}
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

export default Main;
