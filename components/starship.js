import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Loading from "./loading";

const Starship = ({ route }) => {
  const { url } = route.params;
  const [starship, setStarship] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}`)
      .then((resp) => resp.json())
      .then((json) => {
        setStarship(json);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Starship Name: {starship.name}</Text>
          <Text style={styles.text}>Manufacturer: {starship.manufacturer}</Text>
          <Text style={styles.text}>
            Starship Class: {starship.starship_class}
          </Text>
          <Text style={styles.text}>
            Cargo Capacity: {starship.cargo_capacity}
          </Text>
          <Text style={styles.text}>
            HyperDrive Rating: {starship.hyperdrive_rating}
          </Text>
          <Text style={styles.text}>
            Max Atmospheric Speed: {starship.max_atmosphering_speed}
          </Text>
          <Text style={styles.text}>
            Number of Passengers: {starship.passengers}
          </Text>
          <Text style={styles.text}>
            Cost in Credits: {starship.cost_in_credits}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    padding: 40,
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "space-evenly",
    padding: 10,
    width: "100%",
    marginTop: 0,
  },
  text: {
    color: "#f9de4b",
    padding: 25,
    backgroundColor: "#1d1e1f",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Starship;
