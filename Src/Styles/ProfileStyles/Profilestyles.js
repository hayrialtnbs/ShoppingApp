import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    animationContainer: {
        flex: 2,
        alignItems: "center",
        marginTop: 25

    },
    buttonContainer: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        alignSelf: "center"

    },
    textContainer: {
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
        height: '50%',
        width: '100%',
        flex: 1,

    },
    text: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        fontFamily: "serif",
        fontStyle: "italic"
    }


})