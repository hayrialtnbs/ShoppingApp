import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from '../../Styles/SingUpStyles/SingUp.styles';

const SingUp = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [parola, setParola] = React.useState("");
    const [parolaTekrar, setParolaTekrar] = React.useState("");
    const [username, setUserName] = React.useState("");

    function messages() {
        alert('Tebrikler Üye Olundu Lütfen Giriş Ekranına Dönünüz', messages)
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F09819', '#FF512F']} style={styles.linear}>
                <View style={styles.iconCard}>
                    <Ionicons name="basket" size={120} color="white" />
                </View>

                <View style={styles.card}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Hoşgeldiniz</Text>
                        <Text style={{ fontSize: 18, color: "gray" }}>Kayıt ol </Text>
                    </View>


                    <View style={styles.input}>
                        <TextInput
                            style={{ backgroundColor: "white", }}
                            activeUnderlineColor='gray'
                            label="E-posta Adresiniz"
                            value={email}
                            onChangeText={email => setEmail(email)} />
                        <TextInput
                            style={{ backgroundColor: "white", }}
                            activeUnderlineColor='gray'
                            label="Kullanıcı Adınız"
                            value={username}
                            onChangeText={username => setUserName(username)} />
                        <TextInput
                            style={{ backgroundColor: "white", }}
                            activeUnderlineColor='gray'
                            label="Şifre *"
                            value={parola}
                            onChangeText={parola => setParola(parola)}
                            secureTextEntry={true} />
                        <TextInput
                            style={{ backgroundColor: "white", }}
                            activeUnderlineColor='gray'
                            label="Şifre tekrarı *"
                            value={parolaTekrar}
                            onChangeText={parolaTekrar => setParolaTekrar(parolaTekrar)}
                            secureTextEntry={true} />
                    </View>

                    <View style={{ alignItems: "flex-end", marginTop: 15 }}>
                        <Text style={styles.sifreunuttum} onPress={messages}>Şifremi Unuttum?</Text>
                    </View>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={messages}>Kayıt Ol</Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </View>
    );
};
export default SingUp;