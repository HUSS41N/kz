import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import SearchBar from "./src/components/SearchBar";
import NewsCard from "./src/components/NewsCard";
import { Provider } from "react-redux";
import Store from "./src/redux/store"

const App = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState(false);
  
  const onPressHandler = (query) => {
    if (query === "") {
      alert("Search Box can not be Empty");
      return;
    }
    API_RESPONSE_HANDLER(query);
  };

  const API_RESPONSE_HANDLER = (query) => {
    const response = API_HANDLER(query);
    response.then((res) => {
      setNews(res.articles.slice(0, 11));
      setSearch(false);
    });
  };

  const API_HANDLER = (query) => {
    setSearch(true);
    const response = fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2022-08-30&sortBy=publishedAt&apiKey=e18fe1589b984326b6c2f61e427adec2`
    );
    return response.then((response) => {
      return response.json();
    });
  };

  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <SearchBar onPressHandler={onPressHandler} />
      <View style={styles.newsContainer}>
        {search ? <ActivityIndicator /> : null}
        <ScrollView>
          {news.map((item, index) => (
            <NewsCard
              key={index}
              imageSrc={item.urlToImage}
              author={item.source.name}
              description={item.description}
              title={item.title}
              date={item.publishedAt}
            />
          ))}
        </ScrollView>
      </View>
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  newsContainer: {
    marginTop: 60,
  },
});

export default App;
