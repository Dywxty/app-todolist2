import { View, Text } from 'react-native';
import { styles } from './style';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>
      <Text style={styles.subtitle}>Manage your tasks efficiently</Text>
    </View>
  );
}
