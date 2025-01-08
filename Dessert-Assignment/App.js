import React from "react";
import { View, ScrollView, Text } from "react-native";
import { appStyles } from "./Components/styles";
import DessertsList from "./Components/DessertsList";

const App = () => {
  const desserts = [
    { name: "Ice Cream", calories: 200, createdAt: "2024-12-01" },
    { name: "Chocolate Cake", calories: 400, createdAt: "2024-12-02" },
    { name: "Tiramisu", calories: 300, createdAt: "2024-12-03" },
    { name: "Cheesecake", calories: 600, createdAt: "2024-12-04" },
    { name: "Lava Cake", calories: 800, createdAt: "2024-12-05" },
    { name: "Pan Cake", calories: 150, createdAt: "2024-12-06" },
    { name: "Custard", calories: 700, createdAt: "2024-12-08" },
    { name: "Oreo Chocolate", calories: 250, createdAt: "2024-12-09" },
  ];

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>List of Low-Calorie Desserts:</Text>
      <ScrollView>
        <DessertsList desserts={desserts} />
      </ScrollView>
    </View>
  );
};

export default App;
