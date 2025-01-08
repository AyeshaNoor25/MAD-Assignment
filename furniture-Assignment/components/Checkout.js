import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { furnitureData } from "./data";
import styles from "../styles";

const BASE_URL = 'https://checkout-68bc7-default-rtdb.firebaseio.com';

const Checkout = () => {
  const [items, setItems] = useState(furnitureData);

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
// Calculate total rent
const calculateTotalRent = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Save to Firebase (using fetch and BASE_URL)
  const handleCheckout = async () => {
    const orderData = {
      items: items,
      totalRent: calculateTotalRent(),
      orderDate: new Date().toISOString(),
    };
  
    console.log("Order Data:", orderData);
  
    try {
      const response = await fetch(`${BASE_URL}/checkoutItems.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      const responseData = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Data:', responseData);
  
      if (response.ok) {
        alert('Success', 'Items checked out successfully!');
      } else {
        alert('Error', 'Failed to save order. Please try again.');
      }
    } catch (error) {
      console.error('Checkout Error:', error);
      alert('Error', `Failed to save order: ${error.message}`);
    }
  };
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>
              {item.name} - Rs. {item.price}
            </Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.Qbutton}
                onPress={() => handleDecrement(item.id)}
              >
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.Qbutton}
                onPress={() => handleIncrement(item.id)}
              >
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: Rs. {calculateTotalRent()}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.quantityText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
