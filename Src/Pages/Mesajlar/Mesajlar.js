import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../../Styles/MessagesStyles/Messages.Styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Data = [
    {
        id: 1,
        userName: "Hayri ",
        lastName: "Altunbaş",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 2,
        userName: "Abdullah ",
        lastName: "Demir",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 3,
        userName: "Serhat ",
        lastName: "Üstek",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 4,
        userName: "Murat ",
        lastName: "Çelik",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 5,
        userName: "Ahmet ",
        lastName: "Pekmezci",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 6,
        userName: "Doğan  ",
        lastName: "Altunbaş",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },
    {
        id: 7,
        userName: "Apas ",
        lastName: "Bilişim",
        desc: `Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing `,
        icon: "user",
    },

]


const Mesajlar = () => {
    return (
        <View style={styles.container}>

            <FlatList
                data={Data}
                renderItem={({ item, index }) =>
                    <View style={styles.card}>
                        <View style={{ flexDirection: "row", margin: 10 }}>
                            <EvilIcons name={item.icon} size={35} color="gray" />
                            <Text style={{ fontWeight: "bold", color: "black" }}>{item.userName}</Text>
                            <Text style={{ fontWeight: "bold", color: "black" }}>{item.lastName}</Text>
                        </View>
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, margin: 5 }} />
                        <View style={{ padding: 5, margin: 5 }}>

                            <Text style={{ color: "gray", fontStyle: "italic" }}>{item.desc}</Text>
                        </View>
                    </View>
                }
            />

        </View>
    );
};


export default Mesajlar;
