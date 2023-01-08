import { useState } from "react"
import { View, Image, Text, TextInput, StyleSheet, Pressable, ScrollView } from "react-native"
import { API } from "../config/api"


const Register = ({navigation}) => {

  let [form, setForm] = useState({
    firstName: "",
    email: "",
    password: ""
  })

  let handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  console.log(form);
  
  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(form)

      // Memasukkan data ke Database
      const response = await API.post('/auth/register', body, config)
      navigation.navigate("Login")
    } catch (err) {
      console.log(err);
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
          }}
          >Register</Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{marginBottom: 15}}>
            {/* <Text style={{
              fontSize: 10,
              fontWeight: '800',
              color: 'red'
            }}>
              Test
            </Text> */}
            <TextInput 
            style={styling.input}
            placeholder="Email"
            onChangeText={value => handleChange("email", value)}
            value={form.email}
            />
          </View>

          <View style={{marginBottom: 15}}>
            {/* <Text style={{
              fontSize: 10,
              fontWeight: '800',
              color: 'red'
            }}>
              Test
            </Text> */}
            <TextInput 
            style={styling.input}
            placeholder="Name"
            onChangeText={value => handleChange("firstName", value)}
            value={form.firstName}
            />
          </View>


          <View>
            {/* <Text style={{
              fontSize: 10,
              fontWeight: '800',
              color: 'red'
            }}>
              Test
            </Text> */}
            <TextInput 
            style={styling.input} 
            placeholder="Password"
            onChangeText={value => handleChange("password", value)}
            value={form.password}
            />
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Pressable style={styling.login}>
            <Text style={{fontWeight: '800', color: 'white'}} onPress={handleSubmit}>
              Register
            </Text>
          </Pressable>
          <Text style={{textAlign: 'center', marginTop: 15}}>
            Joined Us Before <Text style={{color: '#FF5555'}} onPress={() => navigation.navigate("Login")}>
              Login
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
    padding: 10
  },

  login: {
    backgroundColor: '#FF5555',
    backgroundColor: "#FF5555",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  }
})

export default Register;