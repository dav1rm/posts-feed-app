import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import Post from '~/components/Post';

const bgColor = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to React Native!</Text>
    <Post />
  </View>
);

export default App;
