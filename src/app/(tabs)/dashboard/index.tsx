import { Text, View, ViewProps, StyleSheet } from 'react-native';

type DashboardProps = ViewProps

export default function Dashboard({...props}: DashboardProps) {

  return(
    <View style={styles.container} {...props}>
      <Text>Hello Dashboard do Tony</Text>
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