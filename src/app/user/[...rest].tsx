import { Text, View, ViewProps, StyleSheet } from 'react-native';
import {useLocalSearchParams} from 'expo-router'

type UserRestProps = ViewProps

type IParam = {
  rest: Array<string>
}

export default function UserRest({...props}: UserRestProps) {

  const {rest} = useLocalSearchParams<IParam>()

  console.log(JSON.stringify(rest, null, 2));
  

  return(
    <View style={styles.container} {...props}>
      {rest?.map((item: any, index: number) => (
        <Text key={index}>Hello UserRest {item}</Text>
      ))}
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