import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend#1", age: "20" },
    { name: "Friend#2", age: "54" },
    { name: "Friend#3", age: "35" },
    { name: "Friend#4", age: "67" },
    { name: "Friend#5", age: "26" },
    { name: "Friend#6", age: "12" },
    { name: "Friend#7", age: "24" },
    { name: "Friend#8", age: "26" },
    { name: "Friend#9", age: "29" },
  ];
  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={Styles.textStyle}>
            {item.name}
            {" - Age: " + item.age}
          </Text>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
