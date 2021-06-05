import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Friend = ({ friend, isLove }) => {

  return (
    <View>
      <Image source={{ uri: friend.picture.large }} style={styles.image} />
      {isLove && (
        <View style={styles.loveBox}>
          <Text style={{ color: '#fff', fontSize: '22px' }} >Love</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>{friend.name.first}</Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>{friend.dob.age}</Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>{friend.location.city}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '435px',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrimary: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.80)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  loveBox: {
    position: 'absolute',
    top: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    left: '35%',
    backgroundColor: 'red',
  },
})

export default Friend
