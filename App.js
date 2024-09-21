import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { View, TextInput, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample data with your provided image URL
const data = [
  { id: 1, name: 'Dr. John Smith', speciality: 'Dermatologist', rating: 4.9, image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaTnj2VuwfHPqvefk025J8uVhz1UfYtYWug&s' } },
  { id: 2, name: 'Dr. Anna Dinn', speciality: 'Psychologist', rating: 4.9, image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ta4_w0RmGQJBw0mYu6SgUowgGgFD5VWL9g&s' } },
  { id: 3, name: 'Dr. Angela Rayez', speciality: 'Theoparist', rating: 4.8, image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4Q34RwPNWY_9Uku_asB3O1YR5M9JyLTX1Q&s' } },
  { id: 4, name: 'Dr. Chris Bronte', speciality: 'Dentist', rating: 5.0, image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvICUgxeKKFsyB3eKc8zCAuAm1FAFC4srGg&s' } },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRatingPress = (rating) => {
    console.log(`Rating Pressed: ${rating}`);
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for a doctor..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {filteredData.map(item => (
          <View key={item.id} style={styles.gridItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.speciality}>{item.speciality}</Text>
            <Button 
              title={`Rating: ${item.rating}`} 
              onPress={() => handleRatingPress(item.rating)} 
              color="#9C27B0"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    height: 50,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping of items
    justifyContent: 'space-between', // Space between items
  },
  gridItem: {
    width: '48%', // Adjust width for two columns
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  speciality: {
    color: '#555',
    marginBottom: 5,
  },
});
