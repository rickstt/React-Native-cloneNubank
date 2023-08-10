import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { styles } from './css/Styles';
import { AntDesign, Ionicons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerIconUser}>
            <AntDesign name="user" size={27} color="#fff" />
          </View>

          <View style={styles.headerTopRight}>
            <Ionicons name="ios-eye-off-outline" size={25} color="#fff" />
            <Octicons name="question" size={25} color="#fff" />
            <MaterialCommunityIcons name="email-plus-outline" size={25} color="#fff" />
          </View>
        </View>

        <Text style={styles.txtUser}>Olá, Henrique!</Text>
      </View>

      <View style={styles.account}>
        <View style={styles.accountLine}>
          <Text style={styles.txtAccount}>Conta</Text>
          <Ionicons name="ios-chevron-forward" size={25} color="#000" />
        </View>
        
        <View style={styles.accountInfo}>
          <Text style={styles.txtMoney}>R$ 800,25</Text>
        </View>
      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <View style={styles.bgNav}>
            <Image style={styles.imgPix} source={{uri:
              ("https://img.icons8.com/ios/50/pix.png")}} />
          </View>
          <Text style={styles.txtNav}>Pix</Text>
        </View>
        
        <View style={styles.navItem}>
          <View style={styles.bgNav}>
            <AntDesign style={styles.imgPix} name="barcode" size={25} color="black" />
          </View>
          <Text style={styles.txtNav}>Pagar</Text>
        </View>

        <View style={styles.navItem}>
          <View style={styles.bgNav}>
            <Image style={styles.imgPix} source={{uri:
              ("https://img.icons8.com/ios/50/pix.png")}} />
          </View>
          <Text style={styles.txtNav}>Pix</Text>
        </View>

        <View style={styles.navItem}>
          <View style={styles.bgNav}>
            <Image style={styles.imgPix} source={{uri:
              ("https://img.icons8.com/ios/50/pix.png")}} />
          </View>
          <Text style={styles.txtNav}>Pix</Text>
        </View>
        
      </View>

      <View style={styles.card}></View>

      <View style={styles.info}></View>

      <View style={styles.account}></View>

      <View style={styles.footer}></View>

      <StatusBar style="auto" />
    </View>
  );
}

