import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarshipList from "./starshipList";

const Home = ({ navigation }) => {
  const [isloading, setIsLoading] = useState(false);
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Select a Stars Starship below to learn more</Text>
      </View>
      <StarshipList starShipNames={starShipNames} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    marginTop: 20,
  },
  lowerContainer: {
    flex: 1,
    padding: 50,
    width: 400,
  },
  item: {
    backgroundColor: "#f9de4b",
    padding: 15,
    marginVertical: 7,
    width: 500,
  },
});

export default Home;
