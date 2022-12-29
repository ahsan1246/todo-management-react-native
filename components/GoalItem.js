import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={GoalItemStyles.goalsListItemStyle}>
        {/* <Text> {itemData.index}: {itemData.item.value} {itemData.item.key} </Text> */}
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const GoalItemStyles = StyleSheet.create({
  goalsListItemStyle: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
  },
});

export default GoalItem;
