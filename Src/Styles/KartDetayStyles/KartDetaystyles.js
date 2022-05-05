import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', },
    card: { borderRadius: 15, padding: 15, margin: 20, marginTop: 25, height: 250, width: 350 },
    keyboardContainer: { flex: 2 },
    inner: {
        padding: 24,
        justifyContent: "space-around",
        backgroundColor: "white",
        flex: 1,
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 0.5,
        paddingVertical: 10,
        minHeight: 100,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 18
    },
    header: { fontSize: 20, color: "black", },
    textInput: { height: 40, borderColor: "#000000", borderBottomWidth: 1, marginBottom: 36, marginTop: 10, color: "gray" },
    button: { borderWidth: 0.5, borderColor: "white", borderRadius: 25, height: 60, width: '60%', justifyContent: "center", margin: 15 },
    CardTitle: { backgroundColor: "white", margin: 10, padding: 10, width: 100, height: 50, borderRadius: 15 },
    textCard: { textAlign: "center", justifyContent: "center", fontSize: 18, color: '#AA076B', fontWeight: "bold", },
    CardNumber: { fontSize: 25, color: "white", fontWeight: "bold" },
    NumberTitle: { fontSize: 18, color: "black", left: '11%' },
    Cardİnformation: { flexDirection: "row", marginTop: 25, },
    nameTitle: { position: "absolute", left: '11%' },
    nameText: { fontSize: 18, color: "white", },
    dateORvalid: { position: "absolute", right: 58 },
    textHolder: { fontSize: 15, color: "black", },
    buttonText: { textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" }
})