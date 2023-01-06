import { View, Text, TextInput, StyleSheet, ScrollView, TouchableHighlight } from "react-native"


const AddList = () => {
  return (
    <ScrollView>

      <View style={{
        margin: 25
      }}>
        
        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: '800',
            marginBottom: 25
          }}>
            Add List
          </Text>
          <View>
            <TextInput style={style.input} name="name" placeholder="Name" />
            <TextInput style={style.input} name="Category" placeholder="Category" />
            <TextInput style={style.input} name="Choose" placeholder="Choose" />
            <TextInput
              style={style.input2}
              multiline={true}
              numberOfLines={5}
              placeholder="Description"
              />
          </View>
        </View>

        <View style={{
          marginTop: 100
        }}>
          <TouchableHighlight style={style.addlist}>
            <Text style={{
              fontWeight: '800',
              fontSize: 16,
              color: 'white'
            }}>
              Add List
            </Text>
          </TouchableHighlight>
        </View>

      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    height: 45,
    padding: 10,
    marginBottom: 10
  },

  input2: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    display: 'flex',
  },

  addlist: {
    backgroundColor: '#FF5555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5
  }
})

export default AddList