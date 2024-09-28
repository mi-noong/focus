import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>FOCUS</Text>
    <Text style={styles.subtitle}>시각장애인을 위한 배달 앱</Text>
    <Text style={styles.tiny_name}>이메일</Text>
    <TextInput style={styles.input} placeholder="Enter your Email" />
    <Text style={styles.tiny_name}>비밀번호</Text>
    <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>로그인</Text>
    </TouchableOpacity>
    <View style={styles.separator} />
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="google" size={30} color="#DB4437" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="twitter" size={30} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="facebook" size={30} color="#3B5998" />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.linkText}>뒤로가기</Text>
    </TouchableOpacity>
  </View>
);

export default LoginScreen;