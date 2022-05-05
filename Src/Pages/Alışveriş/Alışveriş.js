import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView,  } from 'react-native';
import styles from '../../Styles/AlışverişStyles/Alışverişstyles';
import { BASE_URL } from "../../Utils/ApiUrls";
import useFetch from '../../hooks/useFetch/useFetch';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import AlışverişCard from '../../Components/AlışverişCard/AlışverişCard';

const Alışveriş = (props) => {
    console.log(props)


    const { loading, data, error } = useFetch(BASE_URL);

  
    const handleShoppingSelect = id => {
        props.navigation.navigate('Detail', { id })
    };

    const renderHome = ({ item }) => (
        <AlışverişCard home={item} onSelect={() => handleShoppingSelect(item.id)} />);


        // LOADİNG 
    if (loading) {
        return (
            <Loading />
        )
    }

    // ERROR 
    if (error) {
        return (
            <View style={styles.lottiecard}>
                <Error />
                <View style={styles.lottieTitle}>
                    <Text style={styles.hataText}>Beklenmedik bir hata oluştu.Lütfen tekrar deneyiniz.</Text>
                </View>
            </View>
        )
    }

    const Tab = createBottomTabNavigator();

    return (
    

            <FlatList data={data} renderItem={renderHome} />

    );
};
export default Alışveriş;