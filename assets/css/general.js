import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8FC",
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
});

export const styleMenu = StyleSheet.create({
    menu: {
        position: "absolute",
        width: "90%",
        height: 60,
        bottom: 54,
        marginLeft: "10%",
    },
    active: {
        color: "#54D1ED",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: -0.03,
    },
    button: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        // position: "static",
        width: 37,
        height: 41,
        left: 0,
        top: 0,
        // flex: "none",
        alignSelf: "center",
        marginLeft: 27,
    },
    TextButton: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: -0.03,
    },
    submenu: {
        position: "absolute",
        width: "90%",
        height: 60,
        left: 0,
        top: 25,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        flexDirection: 'row',
    },
    eclipse: {
        position: "absolute",
        width: 60,
        height: 60,
        left: 134,
        top: -5,
        // background: linear-gradient(180deg, rgba(44, 82, 216, 0) 0%, rgba(44, 82, 216, 0.4) 100%), #54D1ED;
        backgroundColor: "#54D1ED",
        borderRadius: 100,
        textAlign: "center",
        zIndex: 100,
    },

})