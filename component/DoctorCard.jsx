import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function DoctorCard({ name, field, rating, icon }){
  return (
    <View style={styles.doctorContainer}>
      <Icon name={icon} size={40} color="#DE3163" />
      <Text style={styles.doctorName}>{name}</Text>
      <Text style={styles.field}>{field}</Text>
      <Icon name="star" color="white" style={styles.rates}>
        {rating}
      </Icon>
    </View>
  );
}

let styles = StyleSheet.create({
  doctorContainer: {
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 10,
    width: '50%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  doctorName: {
    color: 'black',
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold',
  },
  rates: {
    backgroundColor: '#DE3163',
    borderRadius:10,
    width: 55,
    height: 30,
    padding: 9,
    margin: 10,
    textAlign: 'center',
  },
  field: {
    color: 'white',
    
  },
});
