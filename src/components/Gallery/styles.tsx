import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  touchable: {
    paddingBottom: 20,
    marginTop: 70,
    paddingRight: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 20,
    marginTop: 70,
    width: '70%',
    overflow: 'hidden',
  },
});
