import { StyleSheet } from 'react-native';

const bgColor = '#fff';
const fColor = '#1a1a1a';
const bColor = '#cccc';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: bgColor,
    borderBottomWidth: 1,
    borderColor: bColor,
    height: 60,
    justifyContent: 'center',
  },
  textHeader: {
    color: fColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
