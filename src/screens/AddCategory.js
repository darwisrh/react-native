import { View, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView } from "react-native"
import { API } from "../config/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from 'react'

const AddCategory = () => {

  // Get User 

  // Config
  const [form, setForm] = useState({
    name: ''
  })

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
        }
      }
      const response = await API.post('/addCategory', form, config)
    } catch (err) {
      console.log(err);
    }
  }

  const [categories, setCategories] = useState([])

  const getCategory = async () => {
    try {
      const response = await API.get('/addCategory')
      setCategories(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategory()
  }, [categories])


  return (
    <ScrollView>

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
          onChangeText={value => handleChange("name", value)}
          value={form.name}
          />
          <TouchableHighlight style={style.button}>
            <Text style={{fontSize: 16, fontWeight: '800', color: 'white'}} onPress={handleSubmit}>
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

          {
            categories.map(u => (
              <Text style={{
                backgroundColor: '#81C8FF',
                  color: 'white',
                  paddingHorizontal: 18,
                  paddingVertical: 5,
                  borderRadius: 10,
                  margin: 5
                }}
                key={u._id}
                >
                  {u.name}
              </Text>
            ))
          }

          </View>
        </View>
      </View>

    </ScrollView>
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