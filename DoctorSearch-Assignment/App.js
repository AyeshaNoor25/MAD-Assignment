// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import SearchBar from './component/SearchBar';
// import DoctorCard from './component/DoctorCard';

// export default function App() {
//   return (
//     <View style={styles.parentContainer}>
//       <SearchBar />
//       <Text style={styles.label}>Let's find your doctor</Text>
//       <View style={styles.box}>
//         <DoctorCard name="Dr. John Smith" field="Dermatologist" rating=" 4.5" icon="user" />
//         <DoctorCard name="Dr. Anna Dinn" field="Psychologist" rating=" 5" icon="user-nurse" />
//         <DoctorCard name="Dr. Angel Ray" field="Therapist" rating=" 4.5" icon="user-nurse" />
//         <DoctorCard name="Dr. Chris Bronte" field="Dentist" rating=" 4" icon="user" />
//       </View>
//     </View>
//   );
// }

// let styles = StyleSheet.create({
//   parentContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 20,
//     width: '100%',
//   },
//   label: {
//     color: 'black',
//     marginVertical: 10,
//     fontSize: 18,
//     marginTop: 1,
//     padding: 8,
//   },
//   box: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     marginTop: 5,
//   },
// });
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import SearchBar from './component/SearchBar';
// import DoctorCard from './component/DoctorCard';

// export default function App() {
//   return (
//     <View style={styles.parentContainer}>
//       <SearchBar />
//       <Text style={styles.label}>Let's find your doctor</Text>
//       <View style={styles.box}>
//         <DoctorCard name="Dr. John Smith" field="Dermatologist" rating=" 4.5" icon="user" />
//         <DoctorCard name="Dr. Anna Dinn" field="Psychologist" rating=" 5" icon="user-nurse" />
//         <DoctorCard name="Dr. Angel Ray" field="Therapist" rating=" 4.5" icon="user-nurse" />
//         <DoctorCard name="Dr. Chris Bronte" field="Dentist" rating=" 4" icon="user" />
//       </View>
//     </View>
//   );
// }

// let styles = StyleSheet.create({
//   parentContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 20,
//     width: '100%',
//   },
//   label: {
//     color: 'black',
//     marginVertical: 10,
//     fontSize: 18,
//     marginTop: 1,
//     padding: 8,
//   },
//   box: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     marginTop: 5,
//   },
// });
// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// function App() {
//   const [data, setData] = useState([]); 
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       // Simulate data fetching
//       const response = await new Promise((resolve) =>
//         setTimeout(() => resolve({ data: 'Ayesha Noor _ 41379 _ BSCS_6' }), 2000)
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="black" />
//       ) : (
//         <View style={styles.dataContainer}>
//           <Text style={styles.title}>Data Loaded</Text>
//           <Text>{data}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   dataContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default App;

