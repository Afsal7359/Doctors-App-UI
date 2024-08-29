import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Color from '../../Components/Color/Color';

const BookingList = ({navigation}) => {
  return (
    <>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name='arrow-back'  size={30} color={Color.whitecolor} />
        </TouchableOpacity>
        <View>
            <Text style={styles.headerBackText}>Booking</Text>
        </View>
        <View >
        </View>
      </View>
      <View style={styles.searchView}>
        <TouchableOpacity>
        <Icon name='menu' color={Color.whitecolor} size={25} />
        </TouchableOpacity>
       
         <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Search bookings ...."
          placeholderTextColor={Color.whitecolor}
        />
        <Icon style={styles.searchIcon} name="search" size={20} color={Color.whitecolor}/>
      </View>
     </View>

     <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('addbooking')} >
        <Icons name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  )
}

export default BookingList
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    header: {
        height: windowHeight*0.1,
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
      searchView:{
        height: windowHeight*0.1,
        backgroundColor:Color.maincolor,
        justifyContent:"center",
        flexDirection:"row",
        alignItems: 'center',
      },
      searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Color.whitecolor,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '80%',
        height:windowHeight*0.05
      },
      input: {
        flex:1,
        color: '#333',
      },
      searchIcon: {
        padding: 10,
      },
      addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: Color.maincolor, 
        borderRadius: 50, 
        padding: 20, 
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.8,
        shadowRadius: 2, 
      },
})