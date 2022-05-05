import React, { Component, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, TouchableOpacity } from 'react-native';
import styles from '../../Styles/KartDetayStyles/KartDetaystyles';
import LinearGradient from 'react-native-linear-gradient';


const KartDetay = ({ navigation }) => {
    const [cardNumber, setcardNumber] = useState("0000 0000 0000 0000");

    const [cardHolder, setcardHolder] = useState("Kart Sahibi ");

    const [cardDate, setcardDate] = useState("01");

    const odemeHanlde = () => {
        navigation.navigate('Ödeme')
    }

    return (
        <View style={styles.container}>
            {/* Linear gradient ile sardıgım  kredi kartı tasarım alanı */}
            <LinearGradient
                colors={['#F09819', '#FF512F']}
                style={styles.card}>
                <View style={{ alignItems: "flex-end" }}>
                    <View style={styles.CardTitle}>
                        <Text style={styles.textCard}>CARD</Text>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.CardNumber}>TR{cardNumber}</Text>
                </View>
                <View>
                    <Text style={styles.NumberTitle}>Kart Numarası</Text>
                </View>
                <View style={styles.Cardİnformation}>
                    <View style={styles.nameTitle}>
                        <Text style={styles.nameText}>Adınız</Text>
                    </View>
                    <View style={styles.dateORvalid}>
                        <Text style={styles.nameText}>{cardDate}</Text>
                    </View>

                </View>

                <View style={styles.Cardİnformation}>
                    <View style={styles.nameTitle}>
                        <Text style={styles.textHolder}>{cardHolder}</Text>
                    </View>
                    <View style={styles.dateORvalid}>
                        <Text style={styles.textHolder}>Valid Thru</Text>
                    </View>

                </View>
            </LinearGradient>

            {/* KeyboardAvoidingView ile sardıgım alan kullanıcıdan bilgi alınan alan */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardContainer}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>

                        <Text style={styles.header}>Kart sahibi isim</Text>
                        <TextInput placeholder="Kart Sahibi İsim"
                            placeholderTextColor="gray"
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                            onChangeText={(text) => setcardHolder(text)} />

                        <Text style={styles.header}>Kart Numarası</Text>
                        <TextInput placeholder="0000 0000 0000 0000"
                            placeholderTextColor="gray"
                            underlineColorAndroid='transparent'
                            keyboardType='numeric'
                            style={styles.textInput}
                            onChangeText={(text) => setcardNumber(text)} />

                        <Text style={styles.header}>Tarih</Text>
                        <TextInput placeholder='01/30'
                            placeholderTextColor="gray"
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                            onChangeText={(text) => setcardDate(text)} />
                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

            {/* //Butonun verildigi ve tasarımının yapıldıgı alan// */}
            <TouchableOpacity onPress={odemeHanlde} style={{ alignItems: "center" }} >
                <LinearGradient
                    colors={['#F09819', '#FF512F']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Şimdi Öde</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
export default KartDetay;