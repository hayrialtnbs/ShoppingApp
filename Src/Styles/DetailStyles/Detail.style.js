import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        paddingVertical: 10,
        minHeight: 100,
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
        flex: 1,
        padding: 18
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    desc: {
        fontStyle: 'italic',
        color: 'black',
        fontSize: 18,
        textAlign: "justify"
    },
    price: {
        fontSize: 22,
        color: '#AA076B',

    },
    button: {
        borderWidth: 0.5,
        borderColor: "red",
        backgroundColor: "red",
        borderRadius: 25,
        height: 50,
        width: 120,
        justifyContent: "center",
    },
    buttonCard: {
        left: '60%',
        marginTop: 10
    },
    buttonTitle: {
        textAlign: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "serif"
    },
    descCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    descTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },

})
