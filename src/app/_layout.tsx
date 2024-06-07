import { Stack } from 'expo-router';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='index' options={{title: 'Home'}} />
      <Stack.Screen name='profile' options={{title: 'Perfil'}} />
      <Stack.Screen name='user/index' options={{title: 'Usuário'}} />
      <Stack.Screen name='user/[name]' options={{title: 'Usuário Param'}} />
      <Stack.Screen name='user/[...rest]' options={{title: 'Usuário List Param'}} />
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}