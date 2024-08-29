import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home/Home';
import AddBooking from './src/Screens/Bookings/AddBooking';
import BookingList from './src/Screens/Bookings/BookingList';
import AddPatients from './src/Screens/Patients/AddPatients';
import PatientsList from './src/Screens/Patients/PatientsList';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='addbooking' component={AddBooking} options={{headerShown:false}}/>
            <Stack.Screen name='bookinglist' component={BookingList} options={{headerShown:false}}/>
            <Stack.Screen name='addpatients' component={AddPatients} options={{headerShown:false}}/>
            <Stack.Screen name='patientslist' component={PatientsList} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
