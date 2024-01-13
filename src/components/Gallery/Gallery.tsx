import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { actionGetUsers, actionGetAlbumsByUser } from '../../redux/Album/album.actions';

// Selectors
import { getListUsers, getAlbumByUsers, getLoadingStatus } from '../../redux/Album/album.selectors';

interface User {
  id: string;
  name: string;
}

interface Album {
  id: string;
  title: string;
}

const Gallery: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('kkkkooooo')
  }, [dispatch]);


  return (
    <ScrollView>
      <View style={{ borderColor: 'black', borderStyle: 'solid', borderWidth: 1, padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>All photos</Text>
      </View>
    </ScrollView>
  );
};

export default Gallery;
