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
        flex: 0.9,
        backgroundColor: "#f1f1f1",
        width: "100%",
    },
    accountLine:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 25
    },
    txtAccount:{
        fontSize: 17,
        fontWeight: "bold",
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
    },
    navItem:{
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        marginTop: 25,
    },
    bgNav:{
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#ddd",
    },
    imgPix:{
        height: 25,
        width: 25,
        position: "relative",
        marginLeft: 17,
        marginTop: 17,
    }, 
    txtNav:{
        paddingRight:2,
        marginTop: 10,
    },
    card:{
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    info:{
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    footer:{
        
    },

    // Pré-definição de margem para todos os lados
    margin20:{
        margin: 20,
    },
    margin30:{
        margin: 30,
    }
});