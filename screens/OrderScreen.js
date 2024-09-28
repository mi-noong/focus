import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Feather';
import Voice from "@react-native-voice/voice";

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: '한식', image: require('../images/korean.png'), screen: 'Korean' },
  { id: '2', name: '중식', image: require('../images/chinese.png'), screen: 'Chinese'},
  { id: '3', name: '양식', image: require('../images/western.png'), screen: 'Western'  },
  { id: '4', name: '일식', image: require('../images/japanese.png'), screen: 'Japanese' },
  { id: '5', name: '분식', image: require('../images/snack.png'), screen: 'Snack' },
  { id: '6', name: '디저트', image: require('../images/dessert.png'), screen: 'Dessert' }
];

const OrderScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false); // 음성 인식 상태
  const navigation = useNavigation(); // 네비게이션 훅

  useEffect(() => {
    // 음성 인식 이벤트 리스너
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      if (isReady) {
        await Voice.start('ko-KR');  // 음성 인식 시작
        setIsListening(true);
      } else {
        console.log("음성 인식 준비가 되지 않았습니다.");
      }
    } catch (e) {
      console.error("Voice start error: ", e);
    }
  };
   // 음성 인식 중지
   const stopListening = async () => {
    try {
      if (isListening) {
        setIsListening(false);
        await Voice.stop();
      } else {
        console.log("음성 인식이 실행 중이지 않습니다.");
      }
    } catch (e) {
      console.error("Voice stop error: ", e);
    }
  };
  // 음성 인식 시작 이벤트 핸들러
  const onSpeechStart = () => {
    setIsListening(true);
  };

  // 음성 인식 종료 이벤트 핸들러
  const onSpeechEnd = () => {
    setIsListening(false);
  };

  // 음성 인식 결과 이벤트 핸들러
  const onSpeechResults = (e) => {
    const text = e.value[0];
    setSearchText(text); // 음성으로 변환된 텍스트를 검색창에 입력
  };

  // 카테고리 클릭 시 화면 이동 처리
  const handleCategoryPress = (categoryName) => {
    if (categoryName === '한식') {
      navigation.navigate('Korean');
    }
    else if (categoryName === '중식') {
      navigation.navigate('Chinese');
    }
    else if (categoryName === '양식') {
      navigation.navigate('Western');
    }
    else if (categoryName === '일식') {
      navigation.navigate('Japanese');
    }
    else if (categoryName === '분식') {
      navigation.navigate('Snack');
    }
    else {
      navigation.navigate('Dessert');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item.name)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left-circle" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>ORDER</Text>
      </View>

      <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
          <Icon name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your order"
            placeholderTextColor="#A9A9A9"
          />
      </View>
      <TouchableOpacity style={styles.voiceButton} onPress={isListening ? stopListening : startListening}>
          <Icon name="mic" size={24} color="black" />
      </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>categories</Text>
      
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  backButton: {
    marginTop: 30,
    marginLeft: 7,
    fontSize: 24,
    fontWeight: 'bold'
  },
  title: {
    alignItems: 'center',
    marginTop: 30,
    fontSize: 60,
    fontWeight: 'bold'
  },
  voiceButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    height: 50,
    flex: 1,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#000',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },
  list: {
    flexGrow: 0
  },
  card: {
    backgroundColor: '#f8d9d9',
    width: 230,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  categoryText: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default OrderScreen;