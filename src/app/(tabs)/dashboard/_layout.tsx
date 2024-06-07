import { Tabs } from 'expo-router';
import {  FontAwesome6} from "@expo/vector-icons";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen name='index' options={{
        title: 'Painel',
        tabBarIcon: ({focused, color, size }) => <FontAwesome6 name="user" size={size} color={focused ? 'purple' : color} />
      }} />
      <Tabs.Screen name='settings' options={{
        title: 'Configurações',
        tabBarIconStyle: {backgroundColor: 'red'},
        tabBarIcon: ({focused, color, size }) => <FontAwesome6 name="gear" size={size} color={focused ? 'purple' : color} />
      }} />
    </Tabs>
  )
}