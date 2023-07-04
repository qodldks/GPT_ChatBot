import React, { ReactElement } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

function YoutubeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.title}>유튜브 채널 추천</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    color: 'black',
    marginBottom: 30,
  },
});

export default YoutubeScreen;
