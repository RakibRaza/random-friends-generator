import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants'
import NavBar from "./components/NavBar";
import axios from 'axios'
import Friend from "./components/Friend";

export default function App() {
  const [friends, setFriends] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  async function fetchFriends() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=30')
      setFriends(data.results)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFriends()
  }, [])

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.swipes}>
        {friends.length > 1 && <Friend friend={friends[currentIndex]} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1,
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
