import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    ViewNavbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5992E8",
        width: "100%",
        marginLeft: 550,
        padding: 5,
        paddingRight: 20,
        paddingLeft: 20,
        bottom: 225,
        left: -275.5,
    },

    icon: {
        color: "white"
    },

    container: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    textPath: {
        fontSize: 42, 
        fontWeight: "bold", 
        position: "absolute", 
        left: 164, 
        bottom: 70, 
        color: "white"
    },

    secondTextPath: {
        fontSize: 42, 
        fontWeight: "bold", 
        position: "absolute", 
        left: 90, 
        bottom: 90, 
        color: "white"
    },

    thirdTextPath: {
        fontSize: 42, 
        fontWeight: "bold", 
        position: "absolute", 
        left: 155, 
        bottom: 50, 
        color: "white"
    },
})