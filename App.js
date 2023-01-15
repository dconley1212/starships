import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function App() {
  const [isloading, setIsLoading] = useState(false);
  const [starships, setStarships] = useState([]);
  const [starShipNames, setStarShipNames] = useState([]);

  const handleViewStarships = () => {
    fetch("https://swapi.dev/api/starships")
      .then((resp) => resp.json())
      .then((json) => {
        setStarships(json.results);
        const results = json.results;
        console.log(results);
        const names = results.map((starship) => {
          return { ["starshipName"]: starship.name };
        });
        names.forEach((item, i) => (item["key"] = i + 1));
        setStarShipNames(names);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to your Star Wars Starship Catalogue</Text>
      <Button onPress={handleViewStarships} title="View Starships"></Button>
      {starShipNames.length > 0 ? (
        <FlatList
          data={starShipNames}
          renderItem={({ item }) => <Text>{item.starshipName}</Text>}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
