import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SearchBar(){
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="#DE3163" style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for doctors..."
      />
    </View>
  );
}

let styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 15,
  },
  icon: {
    position: 'absolute',
    left: 10,
    marginTop: 47,
  },
  searchInput: {
    marginTop: 30,
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 55,
    textAlign: 'left',
    paddingLeft: 35,
    color: 'black',
  },
});


