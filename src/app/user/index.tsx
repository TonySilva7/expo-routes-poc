import { Text, View, ViewProps, StyleSheet } from 'react-native';

type UserProps = ViewProps

export default function User({...props}: UserProps) {

  return(
    <View style={styles.container} {...props}>
      <Text>Hello User</Text>
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