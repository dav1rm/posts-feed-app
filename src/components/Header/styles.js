import { Platform, StyleSheet } from 'react-native';

const bgColor = '#fff';
const fColor = '#333333';
const bColor = '#cccc';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: bgColor,
    borderBottomWidth: 1,
    borderColor: bColor,
    justifyContent: 'center',
    marginBottom: 20,

    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  textHeader: {
    color: fColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
