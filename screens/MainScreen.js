import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>FOCUS</Text>
    <Text style={styles.subtitle}>시각장애인을 위한 배달 앱</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>로그인</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.buttonText}>회원가입</Text>
    </TouchableOpacity>
  </View>
);

export default MainScreen;