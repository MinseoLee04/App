import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DiaryScreen() {
    const [fontsLoaded] = useFonts({
      GowunBatangBold: require('./assets/fonts/GowunBatangBold.ttf'),
      GowunBatang: require('./assets/fonts/GowunBatang.ttf')
    });
  
    if (!fontsLoaded) {
      return null;
    }
  
    const handleCalendarPress = () => {
      console.log('캘린더 아이콘이 클릭되었습니다.');
    };
  
    const videoData = [
      { date: '2024.08.20', thumbnail: require('./assets/exPhoto1.jpg') },
      { date: '2024.08.21', thumbnail: require('./assets/exPhoto2.jpg') },
      { date: '2024.08.22', thumbnail: require('./assets/exPhoto3.jpg') },
    ];
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>나의 일기</Text>
        <View style={styles.calendarTipContainer}>
          <TouchableOpacity onPress={handleCalendarPress} style={styles.calendarButton}>
            <Image source={require('./assets/calendar.png')} style={styles.calendarIcon} />
          </TouchableOpacity>
          <Text style={styles.tipText}>달력을 누르면 원하는 날의 영상을 볼 수 있어요</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {videoData.map((video, index) => (
            <View key={index} style={styles.videoContainer}>
              <Text style={styles.dateText}>{video.date}</Text>
              <TouchableOpacity style={styles.videoButton}>
                <Image source={video.thumbnail} style={styles.thumbnailImage} />
              </TouchableOpacity>
            </View>
          ))}
          {videoData.length === 0 && (
            <Text style={styles.emptyText}>아직 촬영된 영상이 없습니다.</Text>
          )}
        </ScrollView>
        {/* Footer 추가 */}
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
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    headerText: {
      fontSize: 32,
      fontFamily: 'GowunBatangBold',
      marginBottom: 20,
    },
    calendarTipContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
      width: '90%',
    },
    calendarButton: {
      marginRight: 10,
    },
    calendarIcon: {
      width: 60,
      height: 60,
    },
    tipText: {
      fontSize: 18,
      fontFamily: 'GowunBatang',
      color: '#444',
      flexWrap: 'wrap',
      flex: 1,
    },
    scrollView: {
      alignItems: 'center',
      paddingBottom: 50,
    },
    videoContainer: {
      width: Dimensions.get('window').width * 0.9,
      marginBottom: 20,
      alignItems: 'center',
    },
    dateText: {
      fontSize: 24,
      fontFamily: 'GowunBatangBold',
      marginBottom: 10,
    },
    videoButton: {
      width: '100%',
      height: 200,
      backgroundColor: '#E0E0E0',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    emptyText: {
      fontSize: 20,
      fontFamily: 'GowunBatang',
      color: '#888',
      marginTop: 50,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingVertical: 15,
      backgroundColor: '#F8F8F8', // Footer의 배경색
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0', // Footer의 위쪽에 테두리 추가
    },
    footerButton: {
      alignItems: 'center',
    },
    footerIcon: {
      width: 100, // 아이콘 크기 조정
      height: 100, // 아이콘 크기 조정
    },
    footerText: {
      fontSize: 24, // 텍스트 크기 조정
      color: '#000',
      fontFamily: 'GowunBatangBold',
    },
  });
