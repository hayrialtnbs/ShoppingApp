import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, } from 'react-native';
import Loading from "../../Components/Loading/Loading";
import useFetch from '../../hooks/useFetch/useFetch';
import { BASE_URL } from '../../Utils/ApiUrls';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../Styles/DetailStyles/Detail.style';



const Detail = (props) => {

    const { id } = props.route.params;
    const { loading, error, data } = useFetch(BASE_URL + "/" + id)
    console.log(props)

    if (loading) {
        return <Loading />;
    }

    // const handle = () => {
    //     props.navigation.navigate('Kart Detay')
    // }

    const sepetEkle = () => {
        props.navigation.navigate('Sepet', { id: id })
    }

    return (
        <ScrollView style={styles.container}>

            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.card}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>${data.price}</Text>


                <TouchableOpacity onPress={sepetEkle} style={styles.buttonCard}>
                    <LinearGradient
                        colors={['#F09819', '#FF512F']}
                        style={styles.button}>
                        <Text style={styles.buttonTitle}>Sepete Ekle</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>

            <View style={styles.descCard}>
                <SimpleLineIcons name="handbag" color="#F09819" size={30} />
                <Text style={styles.descTitle}>Açıklama</Text>
            </View>

            <View style={{ alignItems: "center", padding: 15, }}>
                <Text style={styles.desc}>{data.description}</Text>
            </View>
        </ScrollView>
    );
};
export default Detail;