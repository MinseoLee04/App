import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


export default function RecordingScreen({navigation}) {
  const [isRecording, setIsRecording] = useState(false);

  const handleMicPress = () => {
    setIsRecording(!isRecording);
  };
  
  return (
    <ImageBackground
    source={require('./assets/background.png')}
    style = {styles.background}
    >
<View style={styles.container}>
  <View style={styles.header}>
      <Text style={styles.title}>인생필름</Text>
  </View>
      <View style={styles.promptContainer}>
        <Text style={styles.promptText}>○○님, 오늘은 어떤 하루 였나요?</Text>
      </View>

      <View style={styles.recordingContainer}>
      <Image 
          source={require('./assets/malang.png')}
          style={styles.characterImage}
        />
          <TouchableOpacity onPress={handleMicPress} style={isRecording ? styles.micButtonActive : styles.micButton}>
            <Image
              source={isRecording ? require('./assets/mikeOn.png') : require('./assets/mike.png')}
              style={styles.micIcon}
            />
          </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
          <Image 
            source={require('./assets/goback.png')} 
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>뒤로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('./assets/retry.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>다시쓰기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('./assets/save.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  background: {
    flex:1,
    justifyContent:'start'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'GowunBatangBold',
  },
  promptContainer: {
    flex: 1,
    width: '100%',
    padding: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position:'relative'
  },
  promptText: {
    fontFamily: 'GowunBatang',
    fontSize: 24,
    color: '#000000',
  },
  characterImage: {
    position:'absolute',
    right:-15,
    top: -93,
    width: 170,
    height: 120,
    resizeMode:'contain'
  },
  recordingContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 290,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:'#CACACA',
    marginBottom: 60
  },
  micButtonActive: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  footer: {
    position:'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignContent:'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  footerButton: {
    verticalAlign:'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  footerIcon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  footerText: {
    fontFamily: 'Pretendard',
    fontSize: 18,
    color: '#787878',
  },
});