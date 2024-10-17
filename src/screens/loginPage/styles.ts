import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    SecondContainer: {
        alignItems: "center",
    },

    LoginText: { 
        fontSize: 35,
        marginBottom: 45,
    },

    InputStyle: {
        marginTop: 5,
        width: 490,
        height: 61,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        paddingLeft: 15,
    },

    ButtonPassword: {
        color: "#5992E8",
        marginLeft: 310,
        marginTop: 20,
        fontSize: 17,
    },

    ButtonLogin: {
        backgroundColor: "#5992E8",
        width: 490,
        height: 61,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    TextLogin: {
        color:  "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    ViewLoginBottom: {
        position: "absolute",
        top: 520,
        alignItems: "center"
    },
})