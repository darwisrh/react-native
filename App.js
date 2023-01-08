// Library
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { QueryClient, QueryClientProvider } from 'react-query'

// Components
import { TabNav } from './src/components/TabNavigator'

// Screens
import Index from './src/screens/Index'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ListToDo from './src/screens/ListTodo'
import AddList from './src/screens/AddList'
import DetailList from './src/screens/DetailList'

// Icons 
import AddCategory from './src/screens/AddCategory'


const Stack = createStackNavigator()
const queryClient = new QueryClient()

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="DetailList" component={DetailList} />
          <Stack.Screen 
          name="Welcome"
          component={TabNav}
          options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}