import { 
  View, 
  Image, 
  StyleSheet,
  Text, 
  TextInput, 
  Pressable,
  ScrollView
} from "react-native"
import { useState } from 'react'
import { API } from "../config/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = (props) => {

  const [form, setForm] = useState("")

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  
  const handleSubmit = async () => {
    try {
      const response = await API.post('/auth/login', form)
      
      if (response) {
        await AsyncStorage.setItem("token", response.data.token)
        await AsyncStorage.setItem("name", response.data.user.firstName)
        await AsyncStorage.setItem("id", response.data.user._id)
        await AsyncStorage.setItem("email", response.data.user.email)
      }
      const token = await AsyncStorage.getItem("token")
      if(token !== null) {
        props.navigation.navigate("Welcome")
      }
    } catch (err) {
      console.log(err);
      if (err) {
        alert("Login Failed")
      }
      
    }
  }

  return (
    <ScrollView>

      <View style={styling.image}>
        <Image source={require('../images/Login.png')} />
      </View>

      <View style={styling.loginCont}>
        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: '800'
          }}>Login</Text>
        </View>

        <View style={{marginTop: 20}}>
          <TextInput 
          style={styling.input} 
          placeholder="Email"
          onChangeText={(value => handleChange("email", value))}
          value={form.email}
          />
          <TextInput 
          style={styling.input} 
          placeholder="Password"
          onChangeText={(value => handleChange("password", value))}
          value={form.password}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Pressable style={styling.login}>
            <Text 
            style={{fontWeight: '800', color: 'white'}}
            onPress={handleSubmit}
            >
              Login
            </Text>
          </Pressable>
          <Text style={{textAlign: 'center', marginTop: 15}}>
            New User ? <Text style={{color: '#FF5555'}} onPress={() => props.navigation.navigate("Register")}>
              Register
            </Text>
          </Text>
        </View>

      </View>

    </ScrollView>
  )
}

const styling = StyleSheet.create({
  image: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 20
  },

  loginCont: {
    marginStart: 20,
    marginEnd: 20
  },

  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    height: 45,
    padding: 10,
    marginBottom: 20
  },

  login: {
    backgroundColor: '#FF5555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  }
})

export default Login;