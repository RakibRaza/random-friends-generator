import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
const Footer = ({ handleRemove, handleLove }) => {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handleRemove} >
        <FontAwesome name="times" size={27} color="#ff0000"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLove}>
        <FontAwesome name="heart" size={27} color="#6644F7" ></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})





export default Footer
