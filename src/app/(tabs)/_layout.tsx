import { Stack } from 'expo-router';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='dashboard' />
    </Stack>
  )
}