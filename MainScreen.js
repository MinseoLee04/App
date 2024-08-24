import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const [fontsLoaded] = useFonts({
    GowunBatangBold: require('./assets/fonts/GowunBatangBold.ttf'),
    GowunBatang: require('./assets/fonts/GowunBatang.ttf')
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${year} - ${month} - ${day} (${dayOfWeek})`;
  }

  return (
    <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
        >
      <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>도움이 필요하신가요 ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpImage}>
          <Image source={require('./assets/malangHi.png')} style={styles.helpImage}/>
        </TouchableOpacity>
      </View >
      <View style={styles.body}>
        <Text style={styles.dateText}>{getCurrentDate()}</Text>
        <Text style={styles.questionText}>오늘 당신의 하루는 어떠셨나요?</Text>
        <TouchableOpacity 
          style={styles.cameraButton} 
          onPress={() => navigation.navigate('Recording')} // 카메라 버튼 클릭 시 리콜딩스크린으로 전환
        >
          <Image source={require('./assets/camera.png')} style={styles.cameraImage} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.writeDiaryButton} 
          onPress={() => navigation.navigate('Recording')} // 오늘의 일기 쓰기 버튼 클릭 시 리콜딩스크린으로 전환
        >
          <Text style={styles.writeDiaryText}>오늘의 일기 쓰기 </Text>
          <Icon name="chevron-right" size={24} color= "#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('ViewVideo')}
        >
          <Image source={require('./assets/calendar.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>일기</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Image source={require('./assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>처음으로</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('MyPage')}
        >
          <Image source={require('./assets/profile.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>내 정보</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}
  
  const styles = StyleSheet.create({
    background: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    header: {
      position:'absolute',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      width: '100%',
      paddingHorizontal: 20,
      top: 60,
      right: 10,
    },
    helpButton: {
      position: 'absolute',
      flexDirection: 'column',
      justifyContent:'flex-start',
      backgroundColor: '#C3E5D0',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      right: 50,
      top: 15,
      shadowColor: '#000',    // 그림자의 색상
      shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
      shadowOpacity: 0.25,    // 그림자의 불투명도 (0부터 1까지)
      shadowRadius: 3.84,     // 그림자의 반경
    },
    helpText: {
      fontSize: 20,
      color: '#000',
      fontFamily: 'serif',
    },
    helpImage: {
      position: 'absolute',
      right: -8,
      width: 50,
      height: 70
    },
  
    body: {
      width:'100%',
      alignItems:'center'
    },
    dateText: {
      fontSize: 32,
      fontWeight: 'GowunBatangBold',
      marginVertical: 10,
      marginTop:-50,
      marginBottom: 50,
      fontFamily: 'serif',  
    },
    questionText: {
      fontSize: 28,
      marginVertical: 10,
      fontFamily: 'GowunBatangBold',  // 여기서 고운바탕볼드 폰트를 적용합니다.
      marginBottom: 20,
    },
    cameraImage: {
      width: 200,
      height: 150,
      marginTop:30,
      shadowColor: '#000',    // 그림자의 색상
      shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
      shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
      shadowRadius: 3.84,     // 그림자의 반경
    },
    writeDiaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#407e67',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginTop: 20,
      marginBottom: 50,
      shadowColor: '#000',    // 그림자의 색상
      shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
      shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
      shadowRadius: 3.84,     // 그림자의 반경
    },
    writeDiaryText: {
      fontSize: 24,
      color: '#fff',
      fontFamily: 'GowunBatangBold',  // 여기서 고운바탕볼드 폰트를 적용합니다.
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: 0,
      paddingVertical: 10
    },
    footerButton: {
      alignItems: 'center',
      
    },
    cameraButton:{
      alignItems: 'center',
    },
    footerIcon: {
      width: 100,
      height:100,
    },
    footerText: {
      fontSize: 24,
      color: '#000',
      fontFamily: 'GowunBatangBold',  // 여기서 -Bold 폰트를 적용합니다.
    },
  });