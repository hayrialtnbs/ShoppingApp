import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../Styles/GetStarted/Getstarted';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../Components/Button/Button";

const Getstarted = ({ navigation }) => {

    const handleProductSelect = () => {
        navigation.navigate('Login');
        console.log('GET STARTED : ')
    };

    return (
        <LinearGradient colors={['#F09819', '#FF512F']}
            style={styles.background}>
            <View style={styles.title}>
                <View style={styles.title}>
                    <Text style={styles.text}>BİR SEPET </Text>
                    <Text style={styles.textStore}>Butik </Text>
                </View>
                <View style={styles.iconCard}>
                    <Ionicons name="basket" size={120} color="white" />
                </View>
            </View>

            <View style={styles.title}>
                <View style={styles.SignCard}>
                    <Button text="GET STARTED" onPress={handleProductSelect} />
                </View>

            </View>
        </LinearGradient>
    );
};
export default Getstarted;