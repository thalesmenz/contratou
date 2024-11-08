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

    image: {
        width: 140,
        height: 140,
    },

    icon: {
        color: "white",
    },

    ProfileView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    TextInfo: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
    },

    ViewStarAvaliation: {
        flexDirection: "row",
        marginTop: 10,
    },

    star: {
        padding: 3,
        fontSize: 30,
    },

    AboutMe: {
        width: 490,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 30,
        padding: 9,
    },

    TextAboutMeH1: {
        fontSize: 20,
        fontWeight: "bold"
    },

    TextAboutMe: {
        fontSize: 17,
        paddingTop: 7,
    },

    ImagesJobView: {
        marginTop: 30,
    },

    ImagesJobSubView: {
        width: 490,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 10,
    },

    BorderView: {
        width: 490,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 10,
        justifyContent: "center",
    },

    ViewMargin: {
        marginTop: 30,
    },

    TextH1: {
        fontSize: 25,
        fontWeight: "bold",
    },

    ContactView: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },

    ContactText: {
        fontSize: 22,
        marginLeft: 10,
    },
})