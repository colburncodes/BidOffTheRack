import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    position: 'relative',
    lineHeight: 32,
    fontStyle: 'normal',
    fontSize: 26,
    fontWeight: '600',
    color: colors.BLUE,
    paddingHorizontal: 16,
  },
});
