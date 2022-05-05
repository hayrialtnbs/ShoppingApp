import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: "white",
        flexDirection: 'row',
        paddingVertical: 10,
        padding: 15,
        margin: 15,
        borderRadius: 15,
        flex:1,
        alignSelf: "center"
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'sans-serif-light',
        fontWeight: "bold",
    },
    dscTitle: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'sans-serif-light',
    },

    pricee: {
        fontSize: 20,
        color: '#AA076B',
        fontWeight: "bold",
    },
    totalContainer: {


    },
});