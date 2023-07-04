import React, { ReactElement } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const HomeScreen: React.FC<{ navigation: NativeStackNavigationProp<any> }> = ({
  navigation,
}) => {
  const movePage = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.title}>멋진 채팅 친구</Text>
        <Pressable
          style={[styles.menu, styles.carret]}
          onPress={() => {
            movePage('당근마켓');
          }}>
          <Text style={styles.menuText}>당근마켓 설명작성</Text>
        </Pressable>
        <Pressable
          style={[styles.menu, styles.youtube]}
          onPress={() => {
            movePage('유튜브');
          }}>
          <Text style={styles.menuText}>유튜브 채널 추천</Text>
        </Pressable>
        <Pressable
          style={[styles.menu, styles.chat]}
          onPress={() => {
            movePage('채팅');
          }}>
          <Text style={styles.menuText}>자유채팅</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  menu: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  carret: {
    backgroundColor: '#FF9100',
  },
  youtube: {
    backgroundColor: '#FF5252',
  },
  chat: {
    backgroundColor: '#2962FF',
  },
});

export default HomeScreen;
