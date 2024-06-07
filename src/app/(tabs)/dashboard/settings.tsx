import { Text, View, ViewProps, StyleSheet } from 'react-native';

type SettingsProps = ViewProps

export default function Settings({...props}: SettingsProps) {

  return(
    <View style={styles.container} {...props}>
      <Text>Hello Settings</Text>
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