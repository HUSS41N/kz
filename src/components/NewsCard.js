import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
const {width, height} = Dimensions.get('window')
const NewsCard = ({ imageSrc, author, description,title,date }) => {
  return (
      <View style={styles.container}>
        <Image
          source={{ uri: imageSrc }}
          style={styles.image}
        />
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.greyOutText}>{date}</Text>
            <Text style={styles.greyOutText}>{author}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderColor:"#000000",
    borderWidth:1,
    padding:10
  },
  image: {
    height: 200,
    width: width - 40,
    // resizeMode:"contain"
  },
  title:{
    fontSize:22,
    fontWeight:"500"
  },
  description:{
    fontSize:16,
    color:"#212020",
    marginVertical:5
  },
  greyOutText:{
    color:"#2b2b2b",
    marginVertical:2.5
  }
});

export default NewsCard;
