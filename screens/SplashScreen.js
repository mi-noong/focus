import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main'); // 4초 후에 MainScreen으로 이동
    }, 3500);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
});

export default SplashScreen;