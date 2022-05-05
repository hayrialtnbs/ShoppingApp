import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    iconCard: {
        alignItems: "center",
        marginTop: 25,
        flex: 1,
    },
    linear: {
        width: '100%',
        height: '40%',
        flex: 1

    },
    card: {
        borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 18,
        bottom: 0,
        position: "absolute",
        height: '80%',
        width: '100%',
        flex: 1,

    },
    headerContainer: {
    },
    header: {
        fontSize: 30,
        color: "#8d0057",
        fontFamily: "serif",
    },
    headerText: {
        flexDirection: "row",
    },
    input: {
        marginTop: '20%',
    },
    button: {
        borderWidth: 0.5,
        borderColor: "#F09819",
        backgroundColor: "#F09819",
        borderRadius: 25,
        height: 60,
        width: '100%',
        justifyContent: "center",
        margin: 15,
        alignSelf: "center",
        marginTop: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,

    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    sifreunuttum: {
        fontSize: 16,
        color: "gray",
        textDecorationLine: "underline"
    },
    textKaydol: {
        fontSize: 18,
        color: "#8d0057",
        fontStyle: 'italic',
        textDecorationLine: "underline"
    }
})