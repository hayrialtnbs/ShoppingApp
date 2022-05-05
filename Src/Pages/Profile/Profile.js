import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AnimationAccount from '../../Components/AnimationAccount/AnimationAccount';
import styles from '../../Styles/ProfileStyles/Profilestyles';
import AccountButton from '../../Components/AccountButton/AccountButton';

const Profile = ({ navigation }) => {

    const girisYap = () => {
        navigation.navigate('Account')
    }
    return (
        <View style={styles.container}>
            <View style={styles.animationContainer}>
                <AnimationAccount />
            </View>
            <View style={styles.textContainer}>

                <View style={{ marginTop: 30, alignItems: "center" }}>
                    <Text style={styles.text}>
                        Kayıt oluşturarak indirimlerden ilk siz yararlanabilirsiniz.
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <AccountButton text="Giriş Yap / Kayıt Ol" onPress={girisYap} />
                </View>
            </View>

        </View>
    );
};
export default Profile;