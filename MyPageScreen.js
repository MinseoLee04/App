import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';  // expo-font 패키지 사용

export default function ProfileScreen() {
  // GowunBatang 폰트를 로드합니다.
  const [fontsLoaded] = useFonts({
    GowunBatangBold: require('./assets/fonts/GowunBatangBold.ttf'), 
    GowunBatang: require('./assets/fonts/GowunBatang.ttf')  // 폰트 경로 지정
  });

  if (!fontsLoaded) {
    return null; // 폰트가 로드되지 않았다면 UI를 렌더링하지 않습니다.
  }

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
    >
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* 상단 프로필 영역 */}
        <View style={styles.profileContainer}>
          <Image 
            source={require('./assets/profile.png')} 
            style={styles.profileIcon} 
          />
          <Text style={styles.greetingText}>홍길동님, 반갑습니다!</Text>
        </View>

        {/* 수정하기 버튼 */}
        <TouchableOpacity style={styles.editButton}>
          <Image source={require('./assets/pencil.png')} style={styles.editIcon} />
          <Text style={styles.editText}>수정하기</Text>
        </TouchableOpacity>

        {/* 일기 통계 영역 */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>일기 작성 수: 10</Text>
          <Text style={styles.statsText}>최근 작성일: 2024-08-19</Text>
          <Text style={styles.statsText}>일기 작성 빈도: 주 3회</Text>
        </View>

        {/* 목표 및 연락처 영역 */}
        <View style={styles.goalContactContainer}>
          <Text style={styles.sectionTitle}>나의 목표</Text>
          <Text style={styles.goalText}>1. 매일 일기 작성하기</Text>
          <Text style={styles.goalText}>2. 긍정적인 생각하기</Text>
          <Text style={styles.sectionTitle}>연락처</Text>
          <Text style={styles.contactText}>전화번호: 010-1234-5678</Text>
          <Text style={styles.contactText}>비상연락망: 010-9876-5432</Text>
          <Text style={styles.contactText}>이메일: honggildong@naver.com</Text>
        </View>

        {/* Footer 부분 */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('./assets/calendar.png')} style={styles.footerIcon} />
            <Text style={styles.footerText}>일기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('./assets/home.png')} style={styles.footerIcon} />
            <Text style={styles.footerText}>처음으로</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // 컨테이너의 자식 요소들을 위쪽에 정렬
    alignItems: 'center',  // 수평 방향으로 중앙에 정렬
    paddingTop: 60,  // 상단에 여백을 추가
  },

  // 프로필 컨테이너 스타일
  profileContainer: {
    flexDirection: 'row',  // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center',  // 세로 방향으로 중앙 정렬
    justifyContent: 'flex-start',  // 가로 방향으로 왼쪽 정렬
    paddingLeft: 20,  // 왼쪽에 약간의 여백을 둡니다.
    paddingRight: 20,  // 오른쪽에 약간의 여백을 둡니다.
    marginTop: 40,  // 상단에서 약간의 여백을 줍니다.
    width: '100%',  // 컨테이너가 전체 너비를 차지하도록 설정
  },

  profileIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'GowunBatangBold',  // 폰트를 GowunBatangBold로 변경
  },

  // 수정하기 버튼 스타일
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // 수정하기 버튼과 이전 요소 간의 여백
    padding: 10,
    backgroundColor: '#EAEAEA', // 배경색
    borderRadius: 10,
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.25,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  editIcon: {
    width: 24,
    height: 24,
    marginRight: 10, // 아이콘과 텍스트 간격
  },
  editText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'GowunBatangBold',  // 폰트를 GowunBatangBold로 변경
  },

  statsContainer: {
    marginTop: 30, // 통계 영역과 프로필 영역 사이에 여백 추가
    paddingHorizontal: 20, // 통계 영역의 좌우 여백
    width: '100%', // 통계 영역의 너비를 전체로 설정
  },
  statsText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'GowunBatangBold',  // 폰트를 GowunBatangBold로 변경
    marginBottom: 0, // 각 통계 항목 간의 간격
  },
  goalContactContainer: {
    marginTop: 30, // 목표 및 연락처 영역과 통계 영역 사이에 여백 추가
    paddingHorizontal: 20, // 좌우 여백
    width: '100%', // 너비를 전체로 설정
  },
  sectionTitle: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'GowunBatangBold',  // 폰트를 GowunBatangBold로 변경
    marginBottom: 10, // 제목과 내용 간의 간격
    marginTop: 20, // 섹션 제목 위쪽 여백
  },
  goalText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'GowunBatang',  // 일반 글꼴은 GowunBatang으로 설정
    marginBottom: 5, // 각 목표 항목 간의 간격
  },
  contactText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'GowunBatang',  // 일반 글꼴은 GowunBatang으로 설정
    marginBottom: 5, // 각 연락처 항목 간의 간격
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