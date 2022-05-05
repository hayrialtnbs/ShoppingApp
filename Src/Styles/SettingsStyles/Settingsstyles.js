import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', },
    card: {
        borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        borderRadius: 25,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    button: { borderWidth: 0.5, borderColor: "white", borderRadius: 25, height: 60, width: '70%', justifyContent: "center" },
    cardText: { marginLeft: 10, color: 'black', fontWeight: "bold", fontSize: 16 },
    cardDesc: { marginLeft: 10, color: "gray" },
    cardButton: { alignItems: "center", marginTop: 25 },
    buttonText: { textAlign: "center", color: "white", fontWeight: "bold", fontSize: 18 }


});