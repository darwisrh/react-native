// Library
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import Index from './src/screens/Index'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ListToDo from './src/screens/LoginListTodo';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ListToDo" component={ListToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}