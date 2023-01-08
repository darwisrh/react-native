import { View, Text, TextInput, StyleSheet, ScrollView, TouchableHighlight } from "react-native"
import { useState, useEffect } from 'react'
import { Picker } from "@react-native-picker/picker"
import { API } from "../config/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddList = () => {

  // GetUserId
  // let [getUserId, setId] = useState()


  // const getUser = async () => {
  //   try {
  //     const id = await AsyncStorage.getItem("id")

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // // useEffect(() => {
  // //   getUser()
  // // },[])
  // // console.log(getId);


  // Form
  const [form, setForm] = useState({
    name: "",
    category: "",
    choose: "",
    description: ""
  })


  // Form Config
  const onChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    })
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

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
        }
      }
      const response = await API.post('/addList', form, config)
      alert("Addlist Success")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView>

      <View style={{
        margin: 25
      }}>
        
        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: '39000',
            marginBottom: 25
          }}>
            Add List
          </Text>
          <View>
            <TextInput 
            style={style.input} 
            name="name" 
            placeholder="Name"
            onChangeText={value => onChange("name", value)}
            value={form.name}
            />

            <Picker
            selectedValue={form.category}
            style={style.input}
            name="category"
            onValueChange={(itemValue) => onChange("category", [itemValue])}
            >
              {
                categories.map((item, i) => (
                  <Picker.Item label={item.name} value={item._id} key={i}/>
                ))
              }
            </Picker>

            <TextInput 
            style={style.input} 
            name="choose" 
            placeholder="Choose Date"
            onChangeText={value => onChange("choose", value)}
            />
            <TextInput
              style={style.input2}
              multiline={true}
              numberOfLines={5}
              placeholder="Description"
              onChangeText={value => onChange("description", value)}
              value={form.description}
              name="description"
            />
          </View>
        </View>

        <View style={{
          marginTop: 100
        }}>
          <TouchableHighlight style={style.addlist} onPress={handleSubmit}>
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
    height: 50,
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