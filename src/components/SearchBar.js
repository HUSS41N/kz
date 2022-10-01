import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
const {width, height} = Dimensions.get('window')
import { useSelector,useDispatch } from "react-redux";
import {setQuery} from "../redux/actions"

const SearchBar = ({ onPressHandler }) => {
  const {query} = useSelector(state => state.queryReducer)
  const dispatch = useDispatch()
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here to search!"
        style={styles.input}
        onChangeText={(newText) => dispatch(setQuery(newText))}
        value={query}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressHandler(query)}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: width / 1.4,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;
