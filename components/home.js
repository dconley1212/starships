import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarshipList from "./starshipList";
import Loading from "./loading";

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [starShipNames, setStarShipNames] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((resp) => resp.json())
      .then((json) => {
        const results = json.results;
        const names = results.map((starship) => {
          return {
            ["starshipName"]: starship.name,
            ["url"]: starship.url,
          };
        });
        names.forEach((item, i) => (item["key"] = i + 1));
        setStarShipNames(names);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Select a Star Wars Starship:</Text>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      ) : (
        <StarshipList starShipNames={starShipNames} navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    width: "100%",
    marginTop: 0,
  },
  loadingContainer: {
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    height: "100%",
    padding: 40,
    marginTop: 0,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 20,
    marginTop: 10,
  },
});

export default Home;
