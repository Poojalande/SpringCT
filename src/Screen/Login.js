import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import {Container} from '../Component/container/index';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../storageRedux/Action';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loginClick = async () => {
    let apiData;
    let userNameVal =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)
    try {
      let res = await fetch('https://reqres.in/api/login');
      apiData = res;
    } catch (e) {
      alert('something went wrong')
    }
    
    if (username != '' && password != '') {
      if (
        userNameVal &&
        apiData.status == 200 &&
        username === 'eve.holt@reqres.in'
      ) {
        dispatch(login(username, password));
      } else {
        alert('Please enter valid username');
      }
    } else if (username == '' && password == '') {
      alert('Please enter username and password');
    } else if (password == '') {
      alert('Please enter password');
    }
  };

  return (
    <Container
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
          source={require('../assets/image/pexels-cottonbro-7120126.jpg')}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}></View>
      </View>
      <SafeAreaView>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            marginTop: 20,
            marginLeft: 20,
            fontFamily: 'Lobster-Regular',
          }}>
          Login
        </Text>
        <View
          style={{
            marginVertical: 10,
            marginTop: 150,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontFamily: 'ZillaSlab-Medium',
            }}>
            Enter Usernames
          </Text>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#E7E0C9',
              marginVertical: 10,
              marginTop: 15,
              paddingBottom: 5,
            }}>
            <TextInput
              value={username}
              onChangeText={val => setUsername(val)}
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
              }}
              placeholder="Username"
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              marginTop: 20,
              fontFamily: 'ZillaSlab-Medium',
            }}>
            Enter Password
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              marginVertical: 10,
              borderBottomColor: '#E7E0C9',
              paddingBottom: 5,
              marginTop: 15,
            }}>
            <TextInput
              value={password}
              onChangeText={val => setPassword(val)}
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
              }}
              placeholder="Password"
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
          <TouchableOpacity
            onPress={loginClick}
            style={{
              backgroundColor: '#FDEFEF',
              alignItems: 'center',
              borderRadius: 50,
              marginVertical: 30,
              paddingVertical: 10,
              width: '50%',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'ZillaSlab-Bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Login;
