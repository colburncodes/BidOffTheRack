import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: colors.WHITE,
  },
  splash__title: {
    fontSize: 40,
    fontWeight: 'bold',
    top: 50,
  },
  inner__title: {
    color: colors.ORANGE,
  },
  button: {
    backgroundColor: colors.BLUE,
    width: 300,
    height: 60,
    borderRadius: 5,

    top: 100,
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
    top: 120,
  },
});
