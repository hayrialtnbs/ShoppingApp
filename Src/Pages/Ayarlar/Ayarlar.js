import React from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import styles from '../../Styles/SettingsStyles/Settingsstyles';
import LinearGradient from 'react-native-linear-gradient';


const data = [
    {
        id: 1,
        title: "Product Updates",
        description: "Stair ına free the freedom of ypour home"
    },
    {
        id: 2,
        title: "Comments",
        description: "Advertising relabonships vs business"
    },
    {
        id: 3,
        title: "Offer updates",
        description: "A right media max can make "
    },
    {
        id: 4,
        title: "Notifications",
        description: " Creatign remarkable posber prints"
    },
]
const Ayarlar = () => {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>

                        <TouchableOpacity
                            onPress={item.onPress}
                            activeOpacity={1}>

                            <View style={{ padding: 15 }}>
                                <Text style={styles.cardText}>{item.title}</Text>
                                <Text style={styles.cardDesc}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
            <TouchableOpacity onPress={null} style={styles.cardButton} >
                <LinearGradient
                    colors={['#F09819', '#FF512F']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Ayarları güncelle</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
export default Ayarlar;