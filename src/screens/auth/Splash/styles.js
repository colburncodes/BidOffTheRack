import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    top: 150,
    backgroundColor: colors.WHITE,
  },
  splash__title: {
    fontSize: 40,
    fontWeight: 'bold',
    top: 225,
    left: 55,
  },
  inner__title: {
    color: colors.ORANGE,
  },
  button: {
    backgroundColor: colors.BLUE,
    width: 300,
    height: 60,
    borderRadius: 5,
    left: 45,
    top: 300,
  },
  button_title: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    top: 20,
  },
  signin_text: {
    color: colors.BLUE,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    top: 320,
  },
});
