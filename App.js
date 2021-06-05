import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants, { UserInterfaceIdiom } from 'expo-constants'
import NavBar from "./components/NavBar";
import axios from 'axios'
import Footer from "./components/Footer";
import Swipes from "./components/Swipes";

export default function App() {
  const [friends, setFriends] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)
  const [isLove, setIsLove] = useState(false)
  async function fetchFriends() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=20')
      setFriends(data.results)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFriends()
  }, [])

  function handleLeft() {
    nextUser()
  }

  function handleRight() {
    nextUser()
  }
  function nextUser() {
    const nextIndex = friends.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }
  const handleRemove = () => {
    swipesRef.current.openLeft()
  }
  const handleLove = () => {
    setIsLove(true)
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLove(false)
    }, 1000);

    return () => clearTimeout(timeOut)
  }, [isLove])

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.swipes}>
        {friends.length > 1 && friends.map(
          (friend, index) =>
            currentIndex === index && (
              <Swipes
                key={index}
                ref={swipesRef}
                currentIndex={currentIndex}
                friends={friends}
                handleLeft={handleLeft}
                handleRight={handleRight}
                isLove={isLove}
              ></Swipes>))}
      </View>
      <Footer handleRemove={handleRemove} handleLove={handleLove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
