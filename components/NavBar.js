import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
const NavBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="fire" size={27} color="#6644F7" />
      <FontAwesome name="comments" size={27} color="#000" />
      <FontAwesome name="user" size={27} color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  }
})





export default NavBar
