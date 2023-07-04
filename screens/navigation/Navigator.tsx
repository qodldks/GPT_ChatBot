import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react';
import HomeScreen from '../HomeScreen';
import ChatScreen from '../ChatScreen';
import YoutubeScreen from '../YoutubeScreen';
import CarretScreen from '../CarretScreen';

const Stack = createNativeStackNavigator();

export function Navigation(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="홈">
      <Stack.Screen name="홈" component={HomeScreen} />
      <Stack.Screen name="채팅" component={ChatScreen} />
      <Stack.Screen name="유튜브" component={YoutubeScreen} />
      <Stack.Screen name="당근마켓" component={CarretScreen} />
    </Stack.Navigator>
  );
}
