import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>FOCUS</Text>
    <Text style={styles.subtitle}>시각장애인을 위한 배달 앱</Text>
    <Text style={styles.tiny_name}>이름</Text>
    <TextInput style={styles.input} placeholder="Enter your Name" />
    <Text style={styles.tiny_name}>전화번호</Text>
    <TextInput style={styles.input} placeholder="+82 | 000 000 0000" />
    <Text style={styles.tiny_name}>비밀번호 생성</Text>
    <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
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
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>회원가입</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.linkText}>뒤로가기</Text>
    </TouchableOpacity>
  </View>
);

export default SignupScreen;