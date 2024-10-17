import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
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
        height: 80,
        marginTop: 40,
    },

    icon: {
        color: "white",
    },

    WorkerView: {
        borderColor: "#5992E8",
        borderWidth: 2,
        marginTop: 30,
        width: 510,
        height: 215,

    },

    WorkerViewSon: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    DetailsButton: {
        width: 490,
        backgroundColor: "#5992E8",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },

    TextDetailsButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },

    DetailsViewFather: {
        alignItems: "center",
    },

    AlingItensView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },

    TextWorker: {
        fontSize: 25,
        marginLeft: 5,
    },

    LeftWorkerView: {
        marginLeft: 8,
    },

    RightWorkerView: {
        marginRight: 8,
        alignItems: "center",
        marginTop: 10,
    },

    ViewStarAvaliation: {
        flexDirection: "row",
    },

    Star: {
        padding: 3,
    },
})