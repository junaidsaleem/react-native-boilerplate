import {StyleSheet} from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  buttonText: {
    fontSize: 16,
    color: colors.primary,
  },
  // Add other common styles as needed
});

export default commonStyles;
