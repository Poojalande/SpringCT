//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Container} from '../Component/container';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../storageRedux/Action';

// create a component
const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const empData = useSelector(state => state?.AuthReducers?.employeeData)
  const employeeFormNav = () => {
    navigation.navigate('AddEmployee');
  };
  const logoutClick = () => {
    dispatch(logout())
  };
  return (
    <View
      loading={loading}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../assets/image/HomeScreen.jpg')}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 30,
              marginHorizontal: 15,
            }}>
            <View style={{flex: 3}}>
              <TouchableOpacity
                onPress={employeeFormNav}
                style={{
                  backgroundColor: '#F5F7F8',
                  alignItems: 'center',
                  borderRadius: 50,
                  paddingVertical: 10,

                  justifyContent: 'flex-end',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'KohinoorBangla-Semibold',
                  }}>
                  Add Employee
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginLeft: 50}}>
              <TouchableOpacity
                onPress={() => logoutClick()}
                style={{
                  backgroundColor: 'black',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  shadowColor: 'gray',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  right: 0,
                }}>
                <Text style={{color: 'white'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 90}}
            keyExtractor={item => item.name.toString()}
            data={empData}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    marginVertical: 10,
                    borderRadius: 5,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: 'white',
                    shadowColor: 'white',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    marginHorizontal: 15,
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'HoeflerText-Black',
                      }}>
                      {item?.name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'Kailasa',
                        marginVertical: 6,
                      }}>
                      Age: {item.age}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'Kailasa',
                      }}>
                      Address: {item.address}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Home;
