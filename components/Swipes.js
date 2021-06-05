import React from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import Friend from './Friend'

const Swipes = ({ friends, currentIndex, handleLeft, handleRight, swipesRef }) => {

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <Friend friend={friends[currentIndex + 1]}></Friend>
      </RectButton>
    )
  }
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <Friend friend={friends[currentIndex + 1]}></Friend>
      </RectButton>
    )
  }


  return (
    <Swipeable
      // ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        // setWillLike(false)
        handleLeft()
      }}
      onSwipeableRightOpen={() => {
        // setWillPass(false)
        handleRight()
      }}
    // onSwipeableLeftWillOpen={() => setWillLike(true)}
    // onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <Friend friend={friends[currentIndex]} />
    </Swipeable>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default Swipes
