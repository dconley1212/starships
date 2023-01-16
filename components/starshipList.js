import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const StarshipList = ({ starShipNames }) => {
  return (
    <View style={styles.lowerContainer}>
      <FlatList
        data={starShipNames}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate("Starship", { url: item.url })}
          >
            <Text style={styles.itemText}>{item.starshipName}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lowerContainer: {
    flex: 1,
    padding: 50,
    width: 400,
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f9de4b",
    padding: 30,
    marginVertical: 7,
    width: 300,
  },
});

export default StarshipList;
