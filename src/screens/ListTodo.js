import { ScrollView } from "react-native-gesture-handler"
import { Text, View, StyleSheet, Image, TextInput } from "react-native"
import { useState, useEffect } from 'react'
import { API } from "../config/api"

const ListToDo = ({navigation}) => {

  const [seacrhTerm, setSearchTerm] = useState('')

  // Get All List
  const [lists, setLists] = useState([])
  const getList = async () => {
    try {
      const response = await API.get('/addList?$lookup=*')
      setLists(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <ScrollView style={{backgroundColor: 'white'}}>

      
      <View style={style.container}>

        <View style={style.header}>

          <View>
            <Text style={{fontWeight: '800', fontSize: 24}}>
              Helo Brother
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, color: '#FF5555'}}>
              5 Lists
            </Text>
          </View>

          <View>
            <Image source={require('../images/PhotoProf.png')}/>
          </View>

        </View>

        <View style={style.inputcont}>
          
          <View>
            <TextInput
            style={style.input1}
            name="Search"
            placeholder="Search"
            onChangeText={value => setSearchTerm(value)}
            />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}>
            <TextInput
            style={style.input2}
            name="Date"
            placeholder="Choose Date"
            />
            <TextInput
            style={style.input2}
            name="Date"
            placeholder="Category"
            />
            <TextInput
            style={style.input2}
            name="Date"
            placeholder="Status"
            />
          </View>

        </View>

        <View style={{
          marginTop: 30
        }}>

        {
          lists.filter(val => {
            if (seacrhTerm == "") {
              return val
            } else if (val.name.toLowerCase().includes(seacrhTerm.toLocaleLowerCase())) {
              return val
            }
          }).map(item => (
          <View style={BoxList.box} key={item._id}>
            <View>
              <Text 
              style={{fontWeight: '800', fontSize: 12}} 
              onPress={() => navigation.navigate("DetailList", {item})
              }>
              {item.name}
              </Text>
              <Text style={{
                fontWeight: '400', 
                fontSize: 10, 
                color: '#9B9B9B',
                marginTop: 3,
                marginBottom: 10,
                width: 235
                }}
                numberOfLines={4}
                ellipsizeMode="tail"
                >
                {item.description}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image style={{marginRight: 3}} source={require('../images/Calendar.png')} />
                <Text style={{fontWeight: '400', fontSize: 8, color: '#9B9B9B'}}>
                  {item.choose}
                </Text>
              </View>
            </View>

            <View>
              <Text style={{
                fontSize: 10, 
                fontWeight: '800',
                backgroundColor: '#81C8FF',
                paddingHorizontal: 10,
                paddingVertical: 5,
                color: 'white',
                borderRadius: 5
                }}>
                {item.category[0].name}
              </Text>
              <View style={{
                display: 'flex',
                alignItems: 'flex-end',
                marginTop: 10
              }}>
                <Image source={require('../images/RoundShape.png')} />
              </View>
            </View>
            <View>

            </View>
          </View>
          ))
        }

          {/* <View style={BoxList.box2}>
            <View>
              <Text style={{fontWeight: '800', fontSize: 12, textDecorationLine: 'line-through'}}>
                Home Work - Mathematics
              </Text>
              <Text style={{
                fontWeight: '400', 
                fontSize: 10, 
                color: '#9B9B9B',
                marginTop: 3,
                marginBottom: 10,
                width: 210,
                textDecorationLine: 'line-through'
                }}>
                Do homework math probability
              </Text>
              <Text style={{fontWeight: '400', fontSize: 8, color: '#9B9B9B'}}>
                <Image source={require('../images/Calendar.png')} />
                19 July 2022
                </Text>
            </View>

            <View>
              <Text style={{
                fontSize: 10, 
                fontWeight: '800',
                backgroundColor: '#FF8181',
                paddingHorizontal: 10,
                paddingVertical: 5,
                color: 'white',
                borderRadius: 5
                }}>
                Home Work
              </Text>
              <View style={{
                display: 'flex',
                alignItems: 'flex-end',
                marginTop: 10
              }}>
                <Image source={require('../images/CheckCircle.png')} />
              </View>
            </View>
            <View>

            </View>
          </View> */}
        </View>

      </View>

    </ScrollView>
  )
}

const BoxList = StyleSheet.create({
  box: {
    backgroundColor: '#DAEFFF',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginBottom: 10
  },

  box2: {
    backgroundColor: '#F1FFEF',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginBottom: 10
  }
})

const style = StyleSheet.create({
  container: {
    margin: 25
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputcont: {
    marginTop: 30
  },

  input1: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 45,
    padding: 10,
    borderRadius: 5
  },

  input2: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 45,
    padding: 10,
    borderRadius: 5,
    width: 100
  }
})

export default ListToDo