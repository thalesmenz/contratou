import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
        position: "absolute",
        bottom: 300,
        left: -165,
        alignItems: "center"
    },

    InputsView: {
        position: "absolute",
        left: -245,

    },

    InputElement: {
        width: 490,
        height: 61,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        paddingLeft: 15,
        marginTop: 30,
        top: -200,
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
        top: 490,
        left: -245,
    }
})