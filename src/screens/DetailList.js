import { View, Text, StyleSheet, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Route, navigation } from "@react-navigation/native";


const DetailList = ({route, navigation}) => {
  const { item } = route.params
  return (
    <ScrollView>

      <View style={style.container}>
        <View style={style.box}>

          <View style={style.header}>
            <View style={{display: 'flex', justifyContent: 'center'}}>
              <Text style={{
                fontSize: 22, 
                fontWeight: '800'
                }}>
                  {item.name}
              </Text>
            </View>

            <View style={{display: 'flex', alignItems: 'center'}}>
              <Text style={style.headerText}>Study</Text>
              <Image source={require('../images/RoundShape.png')} />
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={style.textDec}>
              {item.description}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require('../images/Calendar.png')} />
            <Text style={{fontSize: 10, color: '#9B9B9B', marginLeft: 5, position: 'relative', bottom: 3}}>
              {item.choose}
            </Text>
          </View>

        </View>
      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    margin: 25,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  box: {
    backgroundColor: '#DAEFFF',
    borderRadius: 5,
    padding: 10
  },
  
  headerText: {
    backgroundColor: '#81C8FF',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginBottom: 10
  },

  textDec: {
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20
  }
})

export default DetailList;