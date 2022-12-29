import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isGoalAddMode, setIsGoalAddMode] = useState(false);

  const addGoal = (goalCtrlVal) => {
    if (goalCtrlVal != null) {
      setGoalsList((currentGoals) => [
        ...currentGoals,
        { id: Math.random(), title: goalCtrlVal },
      ]);
      hideGoalAddMode();
    }
  };

  const deleteGoal = (goalId) => {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const hideGoalAddMode = () => {
    setIsGoalAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <GoalInput
        onAddAct={addGoal}
        cancelAction={hideGoalAddMode}
        isVisible={isGoalAddMode}
      />
      <FlatList
        data={goalsList}
        renderItem={(itemData) => {
          return (
            <GoalItem
              title={itemData.item.title}
              onDelete={() => {
                console.log("on Delete function triggered !");
                deleteGoal(itemData.item.id);
              }}
            />
          );
        }}
      />
      <Button title="Add New Goal" onPress={() => setIsGoalAddMode(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,
  },
});
