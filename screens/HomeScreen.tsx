import React, { ReactElement, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Image,
  Modal,
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

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.title}>멋진 채팅 친구</Text>
        <Image
          source={{
            uri: 'https://m.betanews.net/imagedb/thumb/2009/0816/5701f839.jpg',
          }}
          style={{ height: 400, marginBottom: 20, borderRadius: 16 }}
        />
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
        <Pressable
          style={[styles.menu, styles.developer]}
          onPress={() => {
            setVisible(true);
          }}>
          <Text style={styles.menuText}>개발자</Text>
        </Pressable>
        <Modal
          transparent
          visible={visible}
          animationType="slide"
          // presentationStyle={'formSheet'}
        >
          <View
            style={{
              backgroundColor: '#00000075',
              maxHeight: 900,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
             
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                maxHeight: 150,
                backgroundColor: 'white',
                borderRadius: 16,
                paddingTop: 12,
              }}>
              <Text style={styles.modalText}>신준서</Text>
              <Pressable
                onPress={() => {
                  setVisible(false);
                }}>
                <Text>닫기</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    marginBottom: 10,
  },
  menu: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
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
  developer: {
    backgroundColor: '#1c1c1c',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24
  },
});

export default HomeScreen;
