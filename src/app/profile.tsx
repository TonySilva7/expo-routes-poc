import { Text, View, ViewProps, StyleSheet } from 'react-native';

type ProfileProps = ViewProps

export default function Profile({...props}: ProfileProps) {

  return(
  <View style={styles.container} {...props}>
    <Text>Hello Profile</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});