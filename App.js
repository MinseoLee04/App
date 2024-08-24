import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import LoadingScreen from './LoadingScreen';
import ViewVideoScreen from './ViewVideoScreen';
import MyPageScreen from './MyPageScreen';
import RecordingScreen from './RecordingScreen'; // 리콜딩 스크린 추가

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{ title: '메인 화면', headerShown: false }} 
        />
        <Stack.Screen 
          name="Loading" 
          component={LoadingScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="ViewVideo" 
          component={ViewVideoScreen}
          options={{ title: '비디오 화면', headerShown: false }}
        />
        <Stack.Screen 
          name="MyPage" 
          component={MyPageScreen}
          options={{ title: '마이 페이지', headerShown: false }}
        />
        <Stack.Screen 
          name="Recording" 
          component={RecordingScreen}
          options={{ title: '녹화 화면', headerShown: false }} // 리콜딩 스크린 추가
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
