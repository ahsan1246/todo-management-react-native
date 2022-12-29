import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goalCtrl, setGoalCtrl] = useState();

  const goalCtrlInputHandler = (enteredText) => {
    setGoalCtrl(enteredText);
  };

  const addGoalHandler = () => {
    // Both ways working fine
    props.onAddAct(goalCtrl); //annonimus function
    // onPress={props.onAddAct.bind(this, goalCtrl)} // normal venila js

    setGoalCtrl();
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={goalInputStyle.textInputContainer}>
        <TextInput
          style={goalInputStyle.textInputStyle}
          placeholder="Enter Goal to save ..."
          onChangeText={goalCtrlInputHandler}
          value={goalCtrl}
        />
        <View style={goalInputStyle.buttonContainer}>
          <View style={goalInputStyle.button}>
            <Button title="Cancel" color="red" onPress={props.cancelAction} />
          </View>
          <View style={goalInputStyle.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const goalInputStyle = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },

  textInputStyle: {
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "80%",
    marginBottom: 15,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },

  button: {
    width: "40%",
  },
});

export default GoalInput;
