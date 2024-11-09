import React from 'react'
import { SvgUri } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

const OptionsIcon = () => {
  const navigation = useNavigation();

  const options = [
    { url : "adventurer", name : "Adventurer", seed : "Avery"},
    { url : "avataaars", name : "Avataaars", seed : "Jameson"},
    { url : "big-smile", name : "Big Smile", seed : "Avery"},
    { url : "dylan", name : "Dylan", seed : "James"},
    { url : "open-peeps", name : "Open Peeps", seed : "Sophia"},
    { url : "pixel-art", name : "Pixel Art", seed : "Leo"},
  ]
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>IconGenerator</Text>
        <Text style={styles.texts}>O app perfeito para gerar icones e avatares aleatórios e divertidos de acordo com o seu nome!</Text>

        <View style={styles.containerList}>
          <Text style={styles.texts}>Selecione um tipo de avatar</Text>

          <FlatList
            name="list-options"
            data={options}
            keyExtractor={ item => item.url }
            renderItem={ ({item}) =>
              <TouchableOpacity onPress={() => navigation.navigate('ViewIcon', { type : item.url, seed : item.seed, name : item.name })} style={styles.card}>
                <SvgUri width='60px' height="60px" uri={`https://api.dicebear.com/9.x/${item.url}/svg?seed=${item.seed}`} />

                <Text style={styles.texts}>{item.name}</Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    gap : 15,
    alignContent : 'center',
    justifyContent : 'center',

    paddingVertical : 30,
    paddingHorizontal : 20,
    backgroundColor : '#1F1F1F'
  },
  containerList : {
    flex : 2,
    gap : 15,
    paddingVertical : 30,
    paddingHorizontal : 5,
  },
  title : {
    fontSize : 24,
    fontWeight : 'bold',
    textAlign : 'left',
    color : '#359dd2',
  },
  texts : {
    fontSize : 18,
    fontWeight : '400',
    textAlign : 'left',
    color : '#fafafa',
    lineHeight : 25
  },
  card : {
    paddingVertical : 10,
    paddingHorizontal : 25,
    borderRadius : 5,
    marginBottom : 15,
    backgroundColor : "#262626",

    gap : 15,
    flexDirection : 'row',
    alignItems : 'center'
  }
})

export default OptionsIcon
