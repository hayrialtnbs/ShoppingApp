import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { borderWidth: 0.5, borderColor: "#E0E0E0", backgroundColor: "white", flexDirection: 'row', paddingVertical: 10, minHeight: 150 },
    image: { width: 100, minHeight: 100, resizeMode: 'contain', backgroundColor: "white" },
    body_container: { padding: 5, flex: 1, justifyContent: "space-between" },
    title: { color: 'black', fontSize: 15, fontFamily: 'sans-serif-light' },
    price: { fontSize: 20, color: 'black', fontWeight: 'bold', height: 40, },
    pricee: { fontSize: 20, color: '#AA076B', fontWeight: "bold" },
    para: { textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 15, color: 'black', },
    counter: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        right: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: "white",
        textAlign: "center",
        padding: 3,
        borderRadius: 15,
        backgroundColor: "#E0F7FA"
    },
    updateCounter: { fontSize: 35, fontWeight: "bold", color: "black" },
    decreaseCounter: { fontSize: 35, fontWeight: "bold", color: "black", right: 25 },
    counterCard: { alignItems: "center", flexDirection: "row", right: 15, marginTop: 25 }
});