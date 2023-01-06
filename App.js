// Library
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import { TabNav } from './src/components/TabNavigator';

// Screens
import Index from './src/screens/Index'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ListToDo from './src/screens/LoginListTodo';
import AddList from './src/screens/AddList';
import DetailList from './src/screens/DetailList';

// Icons 
import AddCategory from './src/screens/AddCategory';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ListToDo" component={ListToDo} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="AddList" component={AddList} />
        <Stack.Screen name="DetailList" component={DetailList} />
        <Stack.Screen name="Welcome" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}