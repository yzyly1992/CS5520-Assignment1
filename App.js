import { StyleSheet, View } from 'react-native';
import Controller from './screens/Controller';

export default function App() {
  return (
    <View style={styles.container}>
      <Controller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
