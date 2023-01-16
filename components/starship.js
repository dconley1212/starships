import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Starship = ({ route }) => {
  const { url } = route.params;
  const [starship, setStarship] = useState({});

  useEffect(() => {
    fetch(`${url}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setStarship(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <View>
        <Text>Name: {starship.name}</Text>
        <Text>Starship Class: {starship.starship_class}</Text>
        <Text>Cargo Capacity: {starship.cargo_capacity}</Text>
        <Text>HyperDrive Rating: {starship.hyperdrive_rating}</Text>
        <Text>Manufacturer: {starship.manufacturer}</Text>
      </View>
    </>
  );
};

export default Starship;
