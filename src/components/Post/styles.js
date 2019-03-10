import { StyleSheet } from 'react-native';

const bgColor = '#fff';
const fColor = '#444444';
const bColor = '#cccc';
const aColor = '#939393';

const styles = StyleSheet.create({
  author: {
    color: aColor,
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  post: {
    backgroundColor: bgColor,
    borderRadius: 5,
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 20,
  },
  postHeader: {
    borderBottomWidth: 0.5,
    borderColor: bColor,
    marginBottom: 10,
    paddingBottom: 10,
  },
  title: {
    color: fColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
