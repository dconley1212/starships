import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const Home = ({ navigation }) => {
  const [isloading, setIsLoading] = useState(false);
  const [starShipNames, setStarShipNames] = useState([]);

  const handleViewStarships = () => {
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
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome to your Star Wars Starship Catalogue</Text>
        <Button onPress={handleViewStarships} title="View Starships"></Button>
      </View>
      {starShipNames.length > 0 ? (
        <View style={styles.lowerContainer}>
          <FlatList
            data={starShipNames}
            renderItem={({ item }) => (
              //   <Text style={styles.item}>{item.starshipName}</Text>
              <Button
                onPress={() =>
                  navigation.navigate("Starship", { url: item.url })
                }
                title={item.starshipName}
              ></Button>
            )}
          />
        </View>
      ) : null}
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
