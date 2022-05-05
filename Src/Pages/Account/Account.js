import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Styles/AcoountsStyles/Acoounts.styles';
import { Formik } from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

const Account = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [parola, setParola] = React.useState("");

    const singUp = () => {
        navigation.navigate('Sing Up')
    }

    function alo() {
        alert('Unutmasaydın Kardeş beni alakadar etmez', alo)
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F09819', '#FF512F']} style={styles.linear}>
                <View style={styles.iconCard}>
                    <Ionicons name="basket" size={120} color="white" />
                </View>

                <View style={styles.card}>

                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.header}>Hoşgeldiniz</Text>
                        <View style={styles.headerText}>
                            <Text style={{ fontSize: 18, color: "gray" }}>Hesabınız yok mu? </Text>
                            <Text style={styles.textKaydol} onPress={singUp}>Hemen kaydol</Text>
                        </View>
                    </View>


                    <View style={styles.input}>
                        <TextInput
                            style={{ backgroundColor: "white" }}
                            activeUnderlineColor='gray'
                            label="E-posta Adresiniz"
                            value={email}
                            onChangeText={email => setEmail(email)} />
                        <TextInput
                            style={{ backgroundColor: "white" }}
                            activeUnderlineColor='gray'
                            label="Parola"
                            value={parola}
                            onChangeText={parola => setParola(parola)} />
                    </View>

                    <View style={{ alignItems: "flex-end", marginTop: 15 }}>
                        <Text style={styles.sifreunuttum} onPress={alo}>Şifremi Unuttum?</Text>
                    </View>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Giriş Yap</Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </View>
    );
};
export default Account;