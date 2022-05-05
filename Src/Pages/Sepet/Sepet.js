import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../Styles/SepetStyles/Sepetstyles';
import useFetch from '../../hooks/useFetch/useFetch';
import { BASE_URL } from '../../Utils/ApiUrls';
import LinearGradient from 'react-native-linear-gradient';
import AccountButton from '../../Components/AccountButton/AccountButton';
import Loading from '../../Components/Loading/Loading';

const Sepet = (props) => {
  console.log(props)

  const { id } = props.route.params;
  const { loading, error, data } = useFetch(BASE_URL + "/" + id)
  if (loading) {
    return <Loading />;
  }
  const satınAl = () => {
    props.navigation.navigate('Kart Detay')
  }

  return (
    <ScrollView style={styles.container}>


      <View style={{ backgroundColor: "white", }}>
        <View style={styles.cardContainer} >
          <View style={{ alignSelf: "center" }} >
            <Image style={styles.image} source={{ uri: data.image }} />
          </View>

          <View style={styles.body_container}>
            <Text style={styles.title} >  {data.title} </Text>
            <Text style={styles.dscTitle}>{data.description}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.pricee}>${data.price}</Text>
            </View>
          </View>


        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.cardContainer} >
          <View style={{ alignSelf: "center" }} >
            <Image style={styles.image} source={{ uri: data.image }} />
          </View>

          <View style={styles.body_container}>
            <Text style={styles.title} >  {data.title} </Text>
            <Text style={styles.dscTitle}>{data.description}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.pricee}>${data.price}</Text>
            </View>
          </View>


        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.cardContainer} >
          <View style={{ alignSelf: "center" }} >
            <Image style={styles.image} source={{ uri: data.image }} />
          </View>

          <View style={styles.body_container}>
            <Text style={styles.title} >  {data.title} </Text>
            <Text style={styles.dscTitle}>{data.description}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.pricee}>${data.price}</Text>
            </View>
          </View>


        </View>
      </View>



      {/* 
      <Image source={{ uri: data.image }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
       <TouchableOpacity onPress={satınAl} style={styles.buttonCard}>
          <LinearGradient
            colors={['#F09819', '#FF512F']}
            style={styles.button}>
            <Text style={styles.buttonTitle}>Satın Al</Text>
          </LinearGradient>
        </TouchableOpacity> 


      <View style={styles.descCard}>
        <Text style={styles.descTitle}>Açıklama</Text>
      </View>

      <View style={{ alignItems: "center", padding: 15, }}>
        <Text style={styles.desc}>{data.description}</Text>
      </View> */}
    </ScrollView>
  );
};
export default Sepet;