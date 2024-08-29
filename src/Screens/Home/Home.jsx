import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../Components/Color/Color'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons'

const Home = ({navigation}) => {
  
  return (
    <>
    <StatusBar backgroundColor={Color.maincolor}/>
       {/* Custom Header */}
       <View style={styles.header}>
        <TouchableOpacity >
          {/* <Image source={Backicon} style={{ height: 35, width: 35 }} /> */}
        </TouchableOpacity>
        <TouchableOpacity >
          {/* <Image source={AddIcon} style={{ height: 40, width: 40 }} /> */}
          <Text style={styles.headerTitle}>Dental Clinc</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
    <View style={styles.content}>
        
                 <View style={styles.mainviewBooking}>
            <View style={styles.bookingview1}>
            <Icon name="calendar-o" size={25} color={Color.Black} />
            <Text style={styles.bokingText}>Bookings</Text>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('addbooking')}>
                <Icon name="plus" size={25} color={Color.IconColor} />
            </TouchableOpacity>
        </View>
        <View style={styles.bookingview2}>
            <TouchableOpacity style={styles.touchView1} activeOpacity={0.5}   onPress={() => navigation.navigate('bookinglist')}>
                <View style={styles.touchSubview1}>
                    <Text style={styles.bookingCountText}>0</Text>
                    <Text style={styles.bokingText}>Today</Text>
                </View>
                <View style={{ alignItems:"center",}}>
                <Icons name="eye" size={25} color={Color.IconColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchView1} activeOpacity={0.5}>
            <View style={styles.touchSubview1}>
                    <Text style={styles.bookingCountText}>3</Text>
                    <Text style={styles.bokingText}>Total</Text>
                </View>
                <View style={{ alignItems:"center",}}>
                <Icons name="bookmark" size={25} color={Color.IconColor} />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.mainviewBooking1}>
            <View style={styles.bookingview1}>
            <MIcons name="group" size={25} color={Color.Black} />
            <Text style={styles.bokingText}>Patients</Text>
            </View>
            <TouchableOpacity   onPress={() => navigation.navigate('addpatients')}>
                <Icon name="plus" size={25} color={Color.IconColor} />
            </TouchableOpacity>
        </View>
        <View style={styles.bookingview2}>
            <TouchableOpacity style={styles.touchView1} activeOpacity={0.5}  onPress={() => navigation.navigate('patientslist')}>
                <View style={styles.touchSubview1}>
                    <Text style={styles.bookingCountText}>0</Text>
                    <Text style={styles.bokingText}>Today</Text>
                </View>
                <View style={{ alignItems:"center",}}>
                <Icons name="eye" size={25} color={Color.IconColor} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchView1} activeOpacity={0.5}>
            <View style={styles.touchSubview1}>
                    <Text style={styles.bookingCountText}>3</Text>
                    <Text style={styles.bokingText}>Total Patients</Text>
                </View>
                <View style={{ alignItems:"center",}}>
                <Icons name="bookmark" size={25} color={Color.IconColor} />
                </View>
            </TouchableOpacity>
        </View>
     
    </View>
    </ScrollView>   
    </>
  )
}

export default Home

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
        fontSize: 18,
      },
      headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
      },
      content:{
        flex:1,
        padding:20,
        backgroundColor:Color.whitecolor,
        height:windowHeight*0.9
      },
      mainviewBooking:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
      },
      mainviewBooking1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        marginTop:windowHeight*0.1
      },
      bookingview1:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:15,
       
      },
      bokingText:{
        fontSize:18,
        color:Color.Black,
        fontWeight:"800"
      },
      bookingview2:{
        backgroundColor:Color.viewbgColor,
        height: 0.2*windowHeight,
        marginVertical : 10,
        borderRadius:10,
        elevation:25,
      },
      bookingCountText:{
        fontSize:30,
        fontWeight:"900",
        color:Color.red
      },
      touchView1:{
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
      },
      touchSubview1:{
        flexDirection:"row",
        alignItems:"center",
        gap:15,
      },
})