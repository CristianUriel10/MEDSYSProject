import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import Collapsible from 'react-native-collapsible';
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

// Styles
import {styles} from './styles';

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

  const [myArray, setMyArray] = useState([]);

  const saveArrayData = async newItemId => {
    try {
      // Agregar el nuevo elemento con el ID proporcionado
      const newItem = {id: newItemId, value: 'Nuevo elemento'};

      // Actualizar el array con el nuevo elemento
      const updatedArray = [...myArray, newItem];

      // Guardar el array actualizado en AsyncStorage
      await AsyncStorage.setItem('myArrayKey', JSON.stringify(updatedArray));

      // Actualizar el estado local con el nuevo array
      setMyArray(updatedArray);

      console.log('Array actualizado y guardado con éxito:', updatedArray);
    } catch (error) {
      console.error('Error al guardar el array:', error);
    }
  };

  const getArrayData = async () => {
    try {
      // Recuperar el array desde AsyncStorage
      const jsonData = await AsyncStorage.getItem('myArrayKey');

      if (jsonData !== null) {
        // Parsear el JSON y actualizar el estado local con el array recuperado
        const data = JSON.parse(jsonData);
        setMyArray(data);
        console.log('Array recuperado con éxito:', data);
      } else {
        console.log('No se encontró ningún array almacenado.');
      }
    } catch (error) {
      console.error('Error al recuperar el array:', error);
    }
  };

  useEffect(() => {
    dispatch(actionGetUsers());
    getArrayData();
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
        <Gallery
          id={idGallery}
          title={titleGallery}
          setActiveGallery={setActiveGallery}
        />
      ) : (
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: '600'}}>
              Users
            </Text>
          </View>
          {listUser?.map((item: User) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => toggleCollapse(item.id)}
                style={styles.touchable}>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>

              <Collapsible
                collapsed={openSectionId !== item.id}
                style={{marginLeft: 50}}>
                {loading ? (
                  <Text>Loading....</Text>
                ) : (
                  albumByUSer
                    ?.filter(
                      elemento =>
                        !myArray.some(album => album?.id === elemento.id),
                    )
                    .map((item: Album) => (
                      <View key={item.id} style={styles.albumUser}>
                        <TouchableOpacity
                          onPress={() => moveToGallery(item.id, item.title)}
                          style={{width: '90%'}}>
                          <Text>{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => saveArrayData(item.id)}>
                          <Image
                            style={styles.image2}
                            source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Flat_minus_icon.svg/768px-Flat_minus_icon.svg.png',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
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
