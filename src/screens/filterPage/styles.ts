import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    ContratouH1: {
        fontSize: 50,
        marginBottom: 10,
        fontWeight: "bold",
    },

    ExplicationText: {
        fontSize: 22,
    },

    ExplicationView: {
      alignItems: "center",
      justifyContent: "center"  
    },

    TextView: {
        alignItems: "center",
        marginBottom: 100,
    },

    InputsView: {
        marginBottom: 100,
    },

    InputElement: {
        width: 490,
        height: 61,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        marginTop: 20,
    },

    ButtonAccess: {
        backgroundColor: "#5992E8",
        width: 490,
        height: 61,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    TextAccess: {
        color:  "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    ViewButtonAccess: {
        position: "absolute",
        top: 830,
        alignItems: "center"
    },

    InputStyle: {
        marginTop: 20,
        width: 490,
        height: 61,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        paddingLeft: 15,
    },
})