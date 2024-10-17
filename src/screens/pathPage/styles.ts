import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        top: 0,
        height: 80,
        position: "absolute",
        marginTop: 40,
    },

    IconStyle: {
        color: "white"
    },

    textPath: {
        fontSize: 42,
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        marginTop: 70,
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

    PathCliente: {
        width: 480,
        height: 200,
        borderWidth: 2,
        borderColor: "black",
    },

    PathWorker: {
        width: 480,
        height: 200,
        borderWidth: 2,
        borderColor: "black",
        marginTop: 50,
    },

    ShadowView: {
        width: 480,
        height: 200,
        backgroundColor: "black", 
        opacity: 0.5,
        position: "absolute",
    },
});
