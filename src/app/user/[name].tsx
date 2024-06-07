import { Text, View, ViewProps, StyleSheet } from 'react-native';
import {useLocalSearchParams} from 'expo-router'

type UserDetailProps = ViewProps

export default function UserDetail({...props}: UserDetailProps) {

  const {name} = useLocalSearchParams()

  return(
    <View style={styles.container} {...props}>
      <Text>Hello UserDetail {name}</Text>
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