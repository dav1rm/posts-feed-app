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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Davi Rodrigues de Medeiros',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
