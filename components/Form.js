import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <View>
      <Input
        label="Name"
        textInputConfig={{ placeholder: "Enter your name" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
