import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './css/Styles';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
        </View>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

