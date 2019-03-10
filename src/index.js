import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import Post from '~/components/Post/';
import Header from '~/components/Header/';

const bgColor = '#EE7777';
const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flex: 1,
  },
  posts: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.posts}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default App;
