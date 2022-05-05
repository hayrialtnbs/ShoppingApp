import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    card: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        minHeight: 100,
        borderRadius: 18,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 25,
        justifyContent: "center",
    },
    titleCard: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "auto",
        color: "#8d0057"
    },
    titlePrice: {
        fontWeight: "bold",
        fontSize: 35,
        color: "#8d0057",
        textAlign: "auto"
    },
    cardFlatlist: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        borderRadius: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 25,
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        alignItems: "center",


    },
    titleFlat: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#8d0057",
        fontFamily: "serif",

    },
    name: {
        color: "black",
        fontWeight: "bold",
        fontSize:17,
        fontFamily:"serif"
    }
})