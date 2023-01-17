import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const StarshipList = ({ starShipNames, navigation }) => {
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
    width: "90%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f9de4b",
    padding: 18,
    marginVertical: 7,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default StarshipList;
