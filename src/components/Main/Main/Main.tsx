import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { actionGetUsers } from '../../../redux/Album/album.actions';

// Selectors
import { getListUsers } from '../../../redux/Album/album.selectors';

interface User {
  id: string;
  name: string;
  // Add other properties as needed
}

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const listUser = useSelector(getListUsers);

  useEffect(() => {
    dispatch(actionGetUsers());
  }, [dispatch]);

  // Initialize a state variable to store the currently open section's ID
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const toggleCollapse = (userId: string) => {
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

          <Collapsible collapsed={openSectionId !== item.id}>
            <View>
              <Text>Holaaa</Text>
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

export default Main;
