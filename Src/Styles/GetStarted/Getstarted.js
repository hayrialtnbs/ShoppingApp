import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        alignItems: "center",
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 28,
        margin: 55,
        fontFamily: "serif",
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#636363',
    },
    textStore: {
        color: 'white',
        fontSize: 28,
        alignSelf: "center",
        fontFamily: "serif",
        fontWeight: 'bold',
        marginTop: -40,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#636363',

    },
    button: {
        backgroundColor: "aqua"
    },
    accountText: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "serif",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#636363',
    },
    singText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        margin: 10,
        fontFamily: "serif",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: '#636363',
    },
    Sign: {
        margin: 35
    },
    title: {
        flex: 1
    },
    iconCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    SignCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})