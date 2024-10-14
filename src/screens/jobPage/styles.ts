import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },

    icon: {
        color: "white",
    },

    JobViewFather: {
        alignItems: "center",
    },

    JobViewSon: {
        backgroundColor: "#5992E8",
        width: 490,
        height: 120,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },

    JobText: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold"
    },

    SubCategoriesViewFather: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#5992E8",
        borderWidth: 2,
        paddingBottom: 15,
    },

    SubCategoriesViewSon: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        width: "100%",
    },

    TouchableOpacitySubCategorie: {
        backgroundColor: "#5992E8",
        width: "95%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    SubCategoriesText: {
        color: "white",
        fontSize: 19,
        fontWeight: "bold"
    },

    ShowJobViewSon: {
        color: "white",
        fontSize: 20,
    },

    ShowJobViewSonBtn: {
        marginRight: 40,
    },

    ImageJob: {
        height: 80,
        width: 80,
        marginLeft: 20,
    },
})