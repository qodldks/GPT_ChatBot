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

const CarretScreen: React.FC<{
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
          <Text style={styles.title}>당근마켓 설명작성</Text>
        </View>
        <Image
          source={{
            uri: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg',
          }}
          height={500}
        />
        <Text>
          시작은 판교 기업을 대상으로 한 물품 교환, 직거래 서비스 앱으로 이름은
          판교장터였다.하지만 기업이 아닌, 주변 거주자들이 물품 직거래가
          가능하냐는 문의전화가 계속 옴에 따라 동네에서 중고 직거래 할 수 있는
          지역 기반 중고거래 스마트폰 애플리케이션 서비스로 변경했다. 이전의
          중고거래 플랫폼 중고나라나 번개장터에 비해 인지도는 낮았으나 입소문을
          타면서 직거래만 선호하는 이용자들에게 널리 사용되어 이제는 11번가,
          G마켓과 같은 커머스 앱을 제치고 전체 쇼핑 앱 카테고리에서 쿠팡에 이은
          2위에 올랐다. # 와이즈앱 기준 2021년 5월 기준, 1,440만 명이 이용할
          정도로 빠른 성장세를 보이고 있다. 업자들의 어마어마한 도배에다
          [중나협력사] 태그를 달고 이제는 대놓고 업자짓을 하는 등 완전히
          업자나라가 되어버린 중고나라에 질려버린 이용자들이 당근마켓으로
          이동하는 것으로 추측되고 있다. 네고왕을 보면 당근마켓은 “지역
          커뮤니티”의 활성화가 목표며, 미래에는 위아래집 정도로까지 거리를
          줄이는 게 목표라고 한다. 실제로 알바를 구한다거나 하는 중고거래 이외의
          지역 기반 기능도 있다. 최근 업데이트에서는 '당근페이'라는 기능이
          추가되었다. 미처 현금을 준비하지 못한 구매자가 물건값을 계좌이체로
          보내주겠다면서 계좌번호를 요구하는 경우가 종종 있는데, 계좌번호
          오입력으로 엉뚱한 사람에게 이체되는 경우도 있는데다 이름과 계좌번호를
          알려주기 부담스러워 하는 판매자들도 있어 추가된 기능이다.
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

export default CarretScreen;
