import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', },
    card: {
        borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 5
    }

})