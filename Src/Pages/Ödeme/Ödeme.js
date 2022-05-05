import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../Styles/ÖdemeStyles/Ödeme.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const data = [
    {
        id: 0,
        name: "Mobil Bankacılığı",
        icon: "chevron-forward-circle",
        onPress: null

    },
    {
        id: 1,
        name: "İnternet Bankacılığı",
        icon: "chevron-forward-circle",
        onPress: null

    },
    {
        id: 2,
        name: "SMS Bankacılığı",
        icon: "chevron-forward-circle",
        onPress: null

    },
    {
        id: 3,
        name: "Dükkan",
        icon: "chevron-forward-circle",
        onPress: null

    }
]

const Ödeme = () => {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.titleCard}>MİKTAR</Text>
                {/* <Text style={styles.titlePrice}>{item.price}</Text> */}
            </View>
            <View style={styles.title}>
                <Text style={styles.titleFlat}>Ödeme Şekli</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={item.onPress} activeOpacity={1} style={styles.cardFlatlist}>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <Ionicons name={item.icon} size={20} color="#f12711" />
                        </TouchableOpacity>
                    } />
            </View>

        </View>
    );
};
export default Ödeme;