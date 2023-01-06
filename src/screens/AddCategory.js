import { View, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native"


const AddCategory = ({ navigation }) => {
  return (
    <View>

      <View style={style.container}>
        
        <View>
          <Text style={{fontWeight: '800', fontSize: 24}}>Add Category</Text>
          <TextInput
          style={{
            marginTop: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 2,
            borderColor: 'rgba(0, 0, 0, 0.3)',
            height: 45,
            padding: 10,
            borderRadius: 5,
            marginBottom: 20
          }}
          name="AddCategory"
          placeholder="Name"
          />
          <TouchableHighlight style={style.button}>
            <Text style={{fontSize: 16, fontWeight: '800', color: 'white'}}>
              Add Category
            </Text>
          </TouchableHighlight>
        </View>

        <View style={{
          marginTop: 50
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: '800',
            marginBottom: 10
          }}>
            List Category
          </Text>

          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            <Text style={{
            backgroundColor: '#81C8FF',
              color: 'white',
              paddingHorizontal: 15,
              paddingVertical: 2,
              borderRadius: 7,
              marginEnd: 5
            }}>
              Study
            </Text>

            <Text style={{
              backgroundColor: '#FF8181',
              color: 'white',
              paddingHorizontal: 15,
              paddingVertical: 2,
              borderRadius: 7,
              marginEnd: 5
            }}>
              Home Work
            </Text>

            <Text style={{
              backgroundColor: '#FFB681',
              color: 'white',
              paddingHorizontal: 15,
              paddingVertical: 2,
              borderRadius: 7
            }}>
              Workout
            </Text>
          </View>
        </View>

          <Text onPress={() => navigation.navigate("AddList")}>Next</Text>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    margin: 25
  },

  button: {
    backgroundColor: '#FF5555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  },

  text: {

  }
})

export default AddCategory