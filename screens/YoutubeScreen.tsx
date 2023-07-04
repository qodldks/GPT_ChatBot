import React, { ReactElement } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const YoutubeScreen: React.FC<{
  navigation: NativeStackNavigationProp<any>;
}> = ({ navigation }) => {
  const backText = '<';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.backButtonText}>{backText}</Text>
          </Pressable>
          <Text style={styles.title}>유튜브 채널 추천</Text>
        </View>
        <Image
          source={{
            uri: 'https://blog.kakaocdn.net/dn/c2yJ7I/btqwXeUM6jI/a3WrMGPo9vakaDzQWepkOK/img.jpg',
          }}
          style={{ height: 100 }}
        />
        <Text>
          사용자가 동영상을 자유롭게 올리거나 시청할 수 있는 구글의 콘텐츠
          호스팅 웹사이트이자, 2023년 현재 세계 최대 규모의 비디오 플랫폼이다.
          YouTube라는 명칭은 사용자를 가리키는 'You(당신)'와 미국 영어에서
          텔레비전의 별칭으로 사용되는 'Tube'를 더한 것이다. 과거 텔레비전이
          브라운관(Cathode-Ray 'Tube', CRT)를 사용했기 때문에 텔레비전을 미국
          영어에서 다른 말로 '튜브'라 부른다. 즉 'YouTube'라는 명칭의 어감은
          '당신을 위한 텔레비전', '당신이 곧 텔레비전' 정도이다. 네모난 YouTube
          아이콘의 끝부분은 둥글게 깎여 있고 각 변은 끝부분보다 볼록하게 나와
          있는데 옛 텔레비전에 쓰였던 브라운관의 시각상 특징을 아이콘으로
          디자인한 것이다. 한국에서는 이른바 '너튜브'로도 통용된다.
        </Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: 20,
    width: 20,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
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
