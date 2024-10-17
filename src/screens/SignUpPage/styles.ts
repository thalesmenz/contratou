import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    SecondContainer: {
        alignItems: "center"
    },

    LabelInput: {
        fontSize: 16,
        marginLeft: 12
    },

    SignUpText: { 
        fontSize: 35,
        marginBottom: 45,
    },

    InputStyle: {
        marginTop: 5,
        width: 490,
        height: 70,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        paddingLeft: 15,
    },

    ButtonTerm: {
        color: "#5992E8",
        fontSize: 18,
        marginLeft: 5,
    },

    SecondButtonTerm: {
        color: "#5992E8",
        fontSize: 18,
        marginLeft: 5,
    },

    TextDefault: {
        fontSize: 18,
        marginLeft: 5
    },

    ButtonSignUp: {
        backgroundColor: "#5992E8",
        width: 490,
        height: 70,
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
        top: 790,
        alignItems: "center"
    },
})