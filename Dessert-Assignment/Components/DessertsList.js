import React from "react";
import { View, Text } from "react-native";
import { dessertsListStyles } from "./styles";

const DessertsList = ({ desserts }) => {
  const filteredDesserts = desserts
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

  return (
    <View style={dessertsListStyles.listContainer}>
      {filteredDesserts.map((dessert, index) => (
        <View key={index} style={dessertsListStyles.item}>
          <Text style={dessertsListStyles.itemText}>
            {dessert.name} - {dessert.calories} cal
          </Text>
        </View>
      ))}
    </View>
  );
};

export default DessertsList;
