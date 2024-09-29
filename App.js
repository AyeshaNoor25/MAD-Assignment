import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from './component/SearchBar';
import DoctorCard from './component/DoctorCard';

export default function App() {
  return (
    <View style={styles.parentContainer}>
      <SearchBar />
      <Text style={styles.label}>Let's find your doctor</Text>
      <View style={styles.box}>
        <DoctorCard name="Dr. John Smith" field="Dermatologist" rating=" 4.5" icon="user" />
        <DoctorCard name="Dr. Anna Dinn" field="Psychologist" rating=" 5" icon="user-nurse" />
        <DoctorCard name="Dr. Angel Ray" field="Therapist" rating=" 4.5" icon="user-nurse" />
        <DoctorCard name="Dr. Chris Bronte" field="Dentist" rating=" 4" icon="user" />
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  label: {
    color: 'black',
    marginVertical: 10,
    fontSize: 18,
    marginTop: 1,
    padding: 8,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 5,
  },
});
