import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../Components/Color/Color';

const AddPatients = () => {
  return (
    <>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name='arrow-back'  size={30} color={Color.whitecolor} />
        </TouchableOpacity>
        <View>
            <Text style={styles.headerBackText}>Add Patient Information</Text>
        </View>
        <View >
        </View>
      </View>

      <ScrollView>
        <View style={styles.inputtext}>
            <TextInput placeholder='Patient Name' placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Age'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='DOB'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Sex'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Address'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Phone Number'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Select Doctor'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
        <View style={styles.inputtext}>
            <TextInput placeholder='Date'  placeholderTextColor={Color.PlaceholderColor}/>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.Savebtn}>
        <Text style={styles.btntext}>Save</Text>    
        </TouchableOpacity>
    </>
  )
}

export default AddPatients

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    header: {
        height: 85,
        backgroundColor: Color.maincolor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 15,
      },
      headerBackText: {
        color: '#fff',
        fontSize: 22,
        fontWeight:"800"
      },
      headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
      },
      inputtext:{
        backgroundColor:Color.whitecolor,
        elevation:10,
        borderRadius:5,
        borderBottomColor:Color.maincolor,
        marginVertical:15,
        marginHorizontal:windowWidth*0.05,
        height:windowHeight*0.07,
        justifyContent:"center",
        paddingHorizontal:15,
      },
      Savebtn:{
        backgroundColor:Color.maincolor,
        elevation:10,
        borderRadius:5,
        borderBottomColor:Color.maincolor,
        marginVertical:15,
        marginHorizontal:windowWidth*0.05,
        height:windowHeight*0.07,
        justifyContent:"center",
        alignItems:'center'
      },
      btntext:{
        color:Color.whitecolor,
        fontSize:20,
        fontWeight:"800"
      },
})