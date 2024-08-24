import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

export default function DiaryScreen() {
  const [fontsLoaded] = useFonts({
    GowunBatangBold: require('./assets/fonts/GowunBatangBold.ttf'),
    GowunBatang: require('./assets/fonts/GowunBatang.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleImagePress = () => {
    console.log('메인 이미지가 클릭되었습니다.');
    // 여기에 메인 이미지 클릭 시 실행할 로직 추가 가능
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>인생필름</Text>
      </View>
    
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require('./assets/exPhoto1.jpg')} style={styles.mainImage} />
          </TouchableOpacity>
          <Text style={styles.mainImageText}>
            여기에는 exPhoto.jpg에 대한 설명을 최대 10줄까지 입력할 수 있습니다. 예를 들어, 이 사진은 어느 날 찍은 풍경이거나 중요한 순간을 포착한 이미지일 수 있습니다. 이 사진을 보면서 느꼈던 감정, 당시의 상황, 그리고 이 사진이 특별한 이유 등을 자유롭게 작성할 수 있습니다. 이 텍스트는 여러 줄로 나누어질 수 있으며, 각 줄의 길이는 화면 크기에 따라 자동으로 조정됩니다.
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('ViewVideo')}>
          <Image source={require('./assets/calendar.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>일기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Main')}>
          <Image source={require('./assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>처음으로</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('MyPage')}>
          <Image source={require('./assets/profile.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>내 정보</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    paddingTop: 0,
  },
  titleContainer: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 20,
    marginBottom: 30,
  },
  titleText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'GowunBatangBold',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 150,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  mainImage: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  mainImageText: {
    fontSize: 18,
    fontFamily: 'GowunBatang',
    color: '#333',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#F8F8F8',
    paddingTop: 10,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 100,
    height: 100,
  },
  footerText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'GowunBatangBold',
  },
});
