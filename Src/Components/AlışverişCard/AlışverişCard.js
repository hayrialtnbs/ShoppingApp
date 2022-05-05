import React, { Component, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from '../../Styles/AlışverişCard/AlışverişCardstyle';

const AlışverişCard = ({ home, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect} >

            <View style={styles.container} >

                <View >
                    <Image style={styles.image} source={{ uri: home.image }} />
                </View>

                <View style={styles.body_container}>
                    <Text style={styles.title} >  {home.title} </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.pricee}>${home.price}</Text>
                    </View>
                </View>


            </View>
        </TouchableWithoutFeedback>
    );
};
export default AlışverişCard;