import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, Text, View } from 'react-native';
import { styles } from './css/Styles';
import { AntDesign, Ionicons, Octicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.screen}>

    <ScrollView horizontal={false} style={styles.scrollNav}>

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
            <Text style={styles.txtMoney}>R$ 40,25</Text>
          </View>
        </View>

        
          <View style={styles.nav}>
          <ScrollView horizontal={true} vertical={false} style={styles.scrollNav}>
            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/ios/96/pix.png")}} />
              </View>
              <Text style={styles.txtNav}>Área Pix</Text>
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
                    ("https://img.icons8.com/ios-glyphs/96/initiate-money-transfer.png")}} />
              </View>
              <Text style={styles.txtNav}>Transferir</Text>
            </View>

            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/ios-glyphs/96/request-money.png" )}} />
              </View>
              <Text style={styles.txtNav}>Depositar</Text>
            </View>

            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/ios-glyphs/96/salary-male.png")}} />
              </View>
              <Text style={styles.txtNav}>Cobrar</Text>
            </View>

            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/material-outlined/96/stocks-growth.png")}} />
              </View>
              <Text style={styles.txtNav}>Investir</Text>
            </View>
            
            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/ios-glyphs/90/get-cash.png")}} />
              </View>
              <Text style={styles.txtNav}>Pegar Emprestado</Text>
            </View>

            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/ios-glyphs/96/hand-holding-heart.png")}} />
              </View>
              <Text style={styles.txtNav}>Doação</Text>
            </View>

            <View style={styles.navItem}>
              <View style={styles.bgNav}>
                <Image style={styles.imgPix} source={{uri:
                  ("https://img.icons8.com/material-outlined/96/earth-planet--v2.png")}} />
              </View>
              <Text style={styles.txtNav}>Transferir Internac.</Text>
            </View>
          </ScrollView>
          </View>

      <View style={styles.card}>
        <View style={styles.bgCard}>
          <Image style={styles.imgCard} source={{uri:
            ("https://img.icons8.com/ios/100/bank-cards--v1.png")}} />
            <Text style={styles.txtCard}>Meus cartões</Text>
        </View>
      </View>

      <View style={styles.infos}>
      <ScrollView horizontal={true} vertical={false} style={styles.scrollNav}>
        <View style={styles.infosNav}>
          <Text style={styles.txtInfos}>E você, o que vai fazer com seu <Text style={styles.txtMarcked}>Pedacinho?</Text> Decida agora!</Text>
        </View>

        <View style={styles.infosNav}>
          <Text style={styles.txtInfos}>E você, o que vai fazer com seu <Text style={styles.txtMarcked}>Pedacinho?</Text> Decida agora!</Text>
        </View>

        <View style={styles.infosNav}>
          <Text style={styles.txtInfos}>E você, o que vai fazer com seu <Text style={styles.txtMarcked}>Pedacinho?</Text> Decida agora!</Text>
        </View>
      </ScrollView>
      </View>

      <View style={styles.account}>
        <View style={styles.accountLine}>
          <Text style={styles.txtAccount}>Cartão de crédito</Text>
          <Ionicons name="ios-chevron-forward" size={25} color="#000" />
        </View>
        
        <View style={styles.accountInfo}>
          <Text style={styles.txtDimmer}>Fatura atual</Text>
          <Text style={styles.txtMoney}>R$ 297,46</Text>
          <Text style={styles.txtDimmer}>Limite disponível de ••••••</Text>
        </View>

        <View style={styles.accountLine}>
            <Text style={styles.txtInstallments}>Parcelar compras</Text>
        </View>
      </View> 

      <View style={styles.line}></View>

      <View style={styles.account}>
        <Text style={{fontSize: 18, fontWeight: "bold", marginLeft: 30}}>Acompanhe também</Text>
        <View style={styles.card}>
        <View style={styles.bgCard}>
          <Image style={styles.imgCard} source={{uri:
            ("https://img.icons8.com/material-outlined/96/refund-2.png")}} />
            <Text style={styles.txtCard}>Assistente de pagamentos</Text>
        </View>
      </View>
      </View>
      
      <View style={styles.line}></View>

      <View style={styles.account}>
        <View style={styles.accountLine}>
          <Text style={styles.txtMid}>Empréstimo</Text>
          <Ionicons name="ios-chevron-forward" size={25} color="#000" />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.txtDimmer}>Limite disponível de ••••••</Text>
        </View>
      </View>

    </ScrollView>

    <View style={styles.footer}>
            <MaterialCommunityIcons name="swap-vertical" size={25} color="#820ad1" />

            <MaterialIcons name="attach-money" size={25} color="black" />

            <SimpleLineIcons name="bag" size={25} color="black" />
      </View>
    
    <StatusBar style="inverted" />

    </View>
  );
}

