import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>FOCUS</Text>
    <View style={styles.row}>
      <TouchableOpacity style={[styles.box, styles.purple]}>
        <Icon name="shoppingcart" size={50} color="#000" />
        <Text style={styles.boxText}>장바구니</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, styles.lightGreen]}>
        <Icon name="staro" size={50} color="#000" />
        <Text style={styles.boxText}>즐겨찾기</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={[styles.box, styles.wideBox, styles.button]} onPress={() => navigation.navigate('Order')} >
      <Icon name="creditcard" size={50} color="#000" />
      <Text style={styles.boxText}>주문하기</Text>
    </TouchableOpacity>
    <View style={styles.row}>
      <TouchableOpacity style={[styles.box, styles.yellow]}>
        <Icon name="idcard" size={50} color="#000" />
        <Text style={styles.boxText}>마이페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, styles.skyBlue]}>
        <Icon name="customerservice" size={50} color="#000" />
        <Text style={styles.boxText}>고객센터</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 85,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  box: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  wideBox: {
    width: 270,
    height: 130,
    backgroundColor: '#f8d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  boxText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  purple: {
    backgroundColor: '#E6D9F1',
  },
  lightGreen: {
    backgroundColor: '#D9F7D9',
  },
  yellow: {
    backgroundColor: '#F9F6D9',
  },
  skyBlue: {
    backgroundColor: '#D4E8FF',
  },
  button: {
    backgroundColor: '#f8d9d9',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;