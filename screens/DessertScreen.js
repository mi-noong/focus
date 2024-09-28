import React, { useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

const foodItems = [
    {
      id: 1,
      name: '설빙',
      rating: '4.8(58)',
      deliveryTime: '39~54분',
      minOrder: '15,000원',
      images: [
        require('../images/dessertfood/dessert_menu1.png'), 
        require('../images/dessertfood/dessert_menu2.png'),
        require('../images/dessertfood/dessert_menu3.png'),
      ],
    },
    {
      id: 2,
      name: '와플대학',
      rating: '5.0(514)',
      deliveryTime: '49~54분',
      minOrder: '14,000원',
      images: [
        require('../images/dessertfood/dessert_menu4.png'),
        require('../images/dessertfood/dessert_menu5.png'),
        require('../images/dessertfood/dessert_menu6.png'),
      ],
    },
    {
      id: 3,
      name: '배스킨라빈스',
      rating: '4.5(80)',
      deliveryTime: '26~41분',
      minOrder: '10,000원',
      images: [
        require('../images/dessertfood/dessert_menu7.png'),
        require('../images/dessertfood/dessert_menu8.png'),
        require('../images/dessertfood/dessert_menu9.png'),
      ],
    }
  ];

const DessertScreen = ({navigation}) => {
    const [isListening, setIsListening] = useState(false);
    const[selectedFood, setSelectedFood] = useState(null);

    const handleBack = () => {
      navigation.navigate('Snack');
    }
    const handleNext = () => {
      navigation.navigate('Korean');
    }
    const handleSelectFood = (item) => {
      setSelectedFood(item);
    }
  
    return(
      <View style={styles.listConatiner}>
        <View style={styles.listHeader}>
          <TouchableOpacity onPress={handleBack} style={styles.arrowButton}>
            <Icon name="arrow-left-circle" size={40} color="black" />
          </TouchableOpacity>
          <Text style={styles.chTitle}>디저트</Text>
          <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
            <Icon name="arrow-right-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.listsearchContainer}>
          <TouchableOpacity style={styles.listIcon}>
            <Ionicons name="search" size={28} color="black"/>
          </TouchableOpacity>
          <TextInput
            style={styles.listInput}
            placeholder="Search your order"
            placeholderTextColor='#888'
          />
          <TouchableOpacity style={styles.listIcon}>
            <Ionicons name="mic" size={24} color="black" />
          </TouchableOpacity>
        </View> */}

{/* 검색창, 마이크 */}
        <View style={styles.listsearchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your order"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <TouchableOpacity style={styles.voiceButton}>
          <Icon name="mic" size={24} color="black" />
        </TouchableOpacity>
        </View>
        
{/* 음식 가게들 */}
        <ScrollView contentContainerStyle={styles.foodList}>
          {foodItems.map(item => (
            <TouchableOpacity key={item.id} onPress={() => handleSelectFood(item)}>
              <View key={item.id} style={styles.foodCard}>
              <View style={styles.imageContainer}>
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}  // 스크롤바 숨김
                  style={styles.imageScroll}
                  contentContainerStyle={styles.imageScrollContent}
                >
                  {item.images.map((image, index) => (
                    <TouchableWithoutFeedback key={index}>
                      <Image source={image} style={styles.foodImage} />
                    </TouchableWithoutFeedback>
                  ))}
                </ScrollView>
              </View>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
                <Text style={styles.details}>{item.deliveryTime} | 최소주문금액 {item.minOrder}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>


        {/* {selectedFood && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>{selectedFood.name}</Text>
            <Text style={styles.ratingtitle}>{selectedFood.rating}</Text>
            <Text style={styles.deliverytitle}>{selectedFood.deliveryTime}</Text>
            <Text style={styles.minOrdertitle}>최소주문금액 {selectedFood.minOrder}</Text>
          </View>
        )} */}
      </View>
    )
  }
  const styles = StyleSheet.create({
    listConatiner: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
    },
    listHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    chTitle: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#f8d9d9',
      flex: 1,
      textAlign: 'center',
      marginBottom: 20,
      padding: 5,
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
    },
    arrowButton: {
      padding: 10,
    },
    listsearchContainer: {
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      width: '95%',
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    listInput: {
      flex: 1,
      height: 40,
      marginHorizontal: 10,
    },
    listIcon: {
      padding: 5,
    },
    foodList: {
      paddingBottom: 20,
    },
    foodCard: {
      marginTop: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      marginHorizontal: 10,
      alignItems: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },

    foodImage: {
      width: 170,
      height: 150,
      borderRadius: 5,
      margin: 5,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    imageScroll: {
      width: '100%',
    },
    imageScrollContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
     foodName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    rating: {
      fontSize: 16,
      color: '#888',
    },
    details: {
      fontSize: 14,
      color: '#555',
    },
    detailsContainer: {
      position: 'absolute',
      top: '50%',
      left: '10%',
      right: '10%',
      bottom: '35%',
      backgroundColor: '#f8d9d9',
      borderWidth: 2,
      borderColor: 'black',
      padding: 10,
      borderRadius: 10,
      zIndex: 1,
    },
    detailsTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom:15,
    },
    ratingtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    deliverytitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    minOrdertitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
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

  });

export default DessertScreen;