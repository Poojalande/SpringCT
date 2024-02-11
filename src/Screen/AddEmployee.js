//import liraries
import React, {Component,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeData } from '../storageRedux/Action';

// create a component
const AddEmployee = ({navigation}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address,setAddress] = useState('')
    const dispatch = useDispatch()
    
    const addEmployee = () =>{
        let nameVal = /^[a-zA-Z0-9_-]{4,16}$/.test(name) 
        let addressVal = /[a-zA-Z0-9]{4,16}$/.test(address)
        const data = {
          name: name,
          age: age,
          address:address
        }
        console.log('isNaN(age)',/^[0-9]{4,16}$/.test(name),nameVal && addressVal && (!isNaN(age)||age>1||age<100) )
        if(name != '' && age != ''  && address != ''){
            if(nameVal && addressVal && (isNaN(age)||age>1||age<100)){
                dispatch(addEmployeeData(data))
                navigation.goBack()
            }else{
                alert('Please enter valid data')
            }
        }else{
            alert('Please enter data')
        }
    }
  return (
    <View style={{flex: 1, backgroundColor: '#dddddd'}}>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text
          style={{
            fontFamily: 'MalayalamSangamMN-Bold',
            fontSize: 25,
            color: 'black',
          }}>
          Employee Details
        </Text>
      </View>
      <View style={{borderRadius: 20}}>
        <View
          style={{
            marginVertical: 10,
            marginTop: 50,
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'ZillaSlab-Medium',
            }}>
            Enter Employee name
          </Text>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              marginVertical: 10,
              marginTop: 15,
              paddingBottom: 5,
            }}>
            <TextInput
        
              // value={username}
              onChangeText={val => setName(val)}
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
              }}
              placeholder="Enter Name"
              placeholderTextColor={'rgba(0,0,0,0.3)'}
            />
          </View>
        </View>
      </View>
      <View style={{ borderRadius: 20, marginTop: 20}}>
        <View
          style={{
            // marginVertical: 10,
            // marginTop: 50,
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'ZillaSlab-Medium',
            }}>
            Enter Employee Age
          </Text>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              marginVertical: 10,
              marginTop: 15,
              paddingBottom: 5,
            }}>
            <TextInput
              // value={username}
              onChangeText={val => setAge(val)}
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
              }}
              placeholder="Enter Age"
              placeholderTextColor={'rgba(0,0,0,0.3)'}
            />
          </View>
        </View>
      </View>
      <View style={{ borderRadius: 20, marginTop: 20}}>
        <View
          style={{
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'ZillaSlab-Medium',
            }}>
            Enter Employee Address
          </Text>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              marginVertical: 10,
              marginTop: 15,
              paddingBottom: 5,
            }}>
            <TextInput
              // value={username}
              onChangeText={val => setAddress(val)}x
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
              }}
              placeholder="Enter Address"
              placeholderTextColor={'rgba(0,0,0,0.3)'}
            />
          </View>
        </View>
      </View>
      <View style={{flex:1,alignItems:'center',marginTop:50}}>
      <TouchableOpacity
            onPress={addEmployee}
            style={{
              backgroundColor: '#82A0D8',
              alignItems: 'center',
              borderRadius: 50,
              paddingVertical: 10,
              width: '50%',
              marginTop: 20,
              borderWidth: 1,
                    borderColor: 'white',
                    shadowColor: 'white',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.8,
                    shadowRadius: 8,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                // fontWeight: 'bold',
                fontFamily: 'KohinoorBangla-Semibold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
          </View>
        
    </View>
  );
};

//make this component available to the app
export default AddEmployee;
