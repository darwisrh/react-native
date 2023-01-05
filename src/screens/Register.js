import { View, Image, Text, TextInput, StyleSheet, Pressable } from "react-native"


const Register = (props) => {
  return (
    <View>
      <View style={styling.image}>
        <Image source={require('../images/Login.png')} />
      </View>

      <View style={styling.loginCont}>
        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: '800'
          }}>Register</Text>
        </View>

        <View style={{marginTop: 20}}>
          <TextInput style={styling.input} placeholder="Email"/>
          <TextInput style={styling.input} placeholder="Name"/>
          <TextInput style={styling.input} placeholder="Password"/>
        </View>

        <View style={{marginTop: 30}}>
          <Pressable style={styling.login}>
            <Text style={{fontWeight: '800', color: 'white'}}>
              Register
            </Text>
          </Pressable>
          <Text style={{textAlign: 'center', marginTop: 15}}>
            Joined Us Before <Text style={{color: '#FF5555'}} onPress={() => props.navigation.navigate("Login")}>
              Login
            </Text>
          </Text>
        </View>

      </View>
    </View>
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
    backgroundColor: "#FF5555",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  }
})

export default Register;