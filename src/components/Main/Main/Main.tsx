// Libraries
import { Text } from "react-native";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import { actionGetUsers } from "../../../redux/Album/album.actions";

// Selectors
import { getListUsers } from "../../../redux/Album/album.selectors";


const Main = () => {
  const dispatch = useDispatch();

  const listUser = useSelector(getListUsers);

  console.log('Holaaaaa: ', listUser)

  useEffect(() => {
    dispatch(actionGetUsers());
  }, [])


  return <Text>Consume first service</Text>;
};

export default Main;
