import { StyleSheet }from 'react-native'
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    child: {
      width: window.width / 2 - 10,
      alignItems: 'center',
      marginBottom: 25
    },
  });
  