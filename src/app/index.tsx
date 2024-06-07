import { ComponentProps } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {Link, router} from 'expo-router'

type HomeProps = ComponentProps<typeof View>

export default function Home({ ...props }: HomeProps) {
  const handleNavigateOptional = () => {
    const num = 1;

    console.log(num);
    
    router.navigate('/dashboard')
  }
  return (
    <View style={styles.container} {...props}>
      <Text> Hello Home</Text>
      <Link href='/profile'>Profile</Link>
      <Link href='/user'>User</Link>
      <Link href='/user/TONY'>User Name</Link>
      <Link href='/user/tony/43/RS'>User Rest</Link>
      {/* <Link href='/dashboard'>Dashboard</Link> */}
      <Button title='Painel' onPress={handleNavigateOptional} />
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
})

export { type HomeProps }
