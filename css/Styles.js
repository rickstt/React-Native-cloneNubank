import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        alignItems: "center",
    },  
    header:{
        flex: 1.4,
        backgroundColor: "#820ad1",
        width: "100%",
    },
    headerTop:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 35,
        paddingLeft: 35,
    },
    headerTopRight:{
        flexDirection: "row",
        gap: 35,
        paddingTop: 70,
    },
    headerIconUser:{
        backgroundColor: "#9e29e7",
        padding: 8,
        marginTop: 60,
        borderRadius: 50,
    },
    txtUser:{
        color: "#fff",
        fontSize: 17,
        margin: 28,
    },
    account:{
        flex: 1,
        backgroundColor: "#f1f1f1",
        width: "100%",
    },
    accountLine:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 20
    },
    txtAccount:{
        fontSize: 17,
        fontWeight: "600",
    },
     
    accountInfo:{
        paddingLeft: 35,
        paddingTop: 20,
    },
    txtMoney:{
        fontSize: 22,
        fontWeight: "bold",
    },
    nav:{
        flex: 1,
        backgroundColor: "#f1f1f1",
        width: "100%",
        flexDirection: "row",
        marginTop: 20,
    },
    navItem:{
        justifyContent: "center",
        alignItems: "center",
        width: "11%",
    },
    bgNav:{
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#ddd",
        marginLeft: 30,
        position: "relative",
    },
    imgPix:{
        height: 25,
        width: 25,
        position: "relative",
        marginLeft: 17,
        marginTop: 17,
    }, 
    txtNav:{
        textAlign: "center",
        fontSize: 12,
        fontWeight: "600",
        paddingLeft: 26,
        marginTop: 5,
    },
    scrollNav:{
        width: "100%",
    },
    card:{
        flex: 0.8,
        backgroundColor: "#f1f1f1",
        width: "100%",
        alignItems: "center",
        marginTop: 30,
    },
    bgCard:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 20,
        width: "90%",
        height: 65,
    },
    imgCard:{
        height: 25,
        width: 25,
        marginLeft: 25,
    },
    txtCard:{
        marginLeft: 15,
        fontWeight: "600",
    },
    infos:{
        flex: 0.6,
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        width: "100%",
        alignItems: "center",
        marginTop: 25,
    },
    infosNav:{
        marginLeft: 20,
        width: "25%",
        height: 80,
        borderRadius: 20,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    txtInfos:{
        marginLeft: 20,
        marginRight: 20,
    },
    txtMarcked: {
        color: "#820ad1",
    },
    txtDimmer:{
        color: "#999",
    },
    txtInstallments:{
        fontWeight: "bold",
        fontSize: 15,
        backgroundColor: "#ddd",
        padding: 20,
        paddingLeft: 35,
        borderRadius: 30,
        width: 190,
    },
    line:{
        backgroundColor: "#ccc",
        height: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    txtMid:{
        fontSize: 18,
        fontWeight: "bold",
    },
    footer:{
        backgroundColor: "#f1f1f1",
        flex: 1,
        width: 300,
        borderRadius: 50,
        padding: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 10000,
        marginBottom: 10,
    },

    // Pré-definição de margem para todos os lados
    margin20:{
        margin: 20,
    },
    margin30:{
        margin: 30,
    }
});