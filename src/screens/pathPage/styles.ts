import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0" 
    },

    ViewNavbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5992E8",
        width: "100%",
        padding: 5,
        paddingRight: 20,
        paddingLeft: 20,
        position: "absolute", 
        top: 0,
    },

    icon: {
        color: "white",
        fontSize: 24,
    },

    textPath: {
        fontSize: 42,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },

    secondTextPath: {
        fontSize: 42,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },

    thirdTextPath: {
        fontSize: 42,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
});
