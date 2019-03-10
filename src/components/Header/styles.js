import { StyleSheet } from 'react-native';

const bgColor = '#fff';
const fColor = '#333333';
const bColor = '#cccc';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: bgColor,
    borderBottomWidth: 1,
    borderColor: bColor,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textHeader: {
    color: fColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
