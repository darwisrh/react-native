import { View, Image, Text, Button, StyleSheet, Pressable } from "react-native"



const Index = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.images}>
          <View>
            <Image source={require('../images/accept.png')}/>
            <Image 
            source={require('../images/waystodo.png')}
            style={styles.imagesWt}
            />
          </View>
        </View>

        <View style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Text style={styles.text1}>
            Write your activity and finish your activity.
            Fast, Simple and Easy to Use
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.press1}>
          <Text 
          style={{fontWeight: '800', color: 'white'}}
          onPress={() => props.navigation.navigate("Login")}
          >Login</Text>
        </Pressable>

        <Pressable style={styles.press2}>
          <Text 
          style={{fontWeight: '800', color: 'white'}}
          onPress={() => props.navigation.navigate("Register")}
          >Register</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  press1: {
    backgroundColor: "#FF5555",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5
  },

  press2: {
    backgroundColor: '#B1ADAD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 10,
    borderRadius: 5
  },

  wrapper: {
    paddingStart: 40,
    paddingEnd: 40,
    marginBottom: 90
  },

  text1: {
    textAlign: 'center'
  },

  buttons: {
    margin: 20
  },

  images: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40
  },

  imagesWt: {
    position: "relative",
    left: 17
  }
})

export default Index;