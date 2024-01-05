import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeBaseProvider, Icon , Input, Button, Box, AspectRatio, Image, StatusBar } from "native-base";



const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middel}>
        <Text style={styles.LoginText}>LOGIN</Text>
      </View>
      <View style={styles.Text2}>
        <Text>do not have acount !</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={styles.SignupText}>Sign up</Text></TouchableOpacity>
      </View>
      {/*  username or email input field  */}
      <View style={styles.ButtonStyle}>
        <View style={styles.EmailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
          variant="outline"
          placeholder="Username or Email"
          _light={{
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            placeholderTextColor: "blueGray.50",
          }}
          width={80}
          />
        </View>
      </View>
        {/* password input field */ }
        <View style={styles.ButtonStyleX}>
          <View style={styles.EmailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              width={80}
          />
              </View>
        </View>
        {/* Button */ }
      <View style={styles.ButtonStyle}>
        <Button style={styles.ButtonDesign}>
          Login
        </Button>
      </View>
      {/* Line */}
      <View style={styles.LineStyle}>
        <View style={{flex:1 , height:1, backgroundColor:'black'}}/>
          <View>
            <Text style={{width:50, textAlign: 'center'}}>or</Text>
          </View>
          <View style={{flex:1 , height:1, backgroundColor:'black'}}/>
      </View>
      { /* Box */ }
      <View style={styles.BoxStyle}>
        <Box 
        onPress={() => navigation.navigate('#')}
        style={styles.ImageStyle}
        shadow={3}
        _light={{backgroundColor: 'gray.50'}}
        _dark={{background: "gray.700"}}
        >
          <AspectRatio ratio={1 / 1}>
        <Image
        roundedTop='lg'
        source={{
          uri: "https://th.bing.com/th/id/OIP.B5JpGIo3yS70otTrxtHxzgHaE8?w=1199&h=800&rs=1&pid=ImgDetMain",
        }}
        alt='image'
        />
          </AspectRatio>
        </Box>
        <Box 
        onPress={() => navigation.navigate('#')}
        style={styles.ImageStyle}
        shadow={3}
        _light={{backgroundColor: 'gray.50'}}
        _dark={{background: "gray.700"}}
        >
          <AspectRatio ratio={1 / 1}>
        <Image
        roundedTop='lg'
        source={{
          uri: "https://socialmediaicons.biz/wp-content/uploads/2019/04/Facebook-vector-white-round-social-media-icons-324x324.jpg",
        }}
        alt='image'
        />
          </AspectRatio>
        </Box>
        <Box 
        onPress={() => navigation.navigate('#')}
        style={styles.ImageStyle}
        shadow={3}
        _light={{backgroundColor: 'gray.50'}}
        _dark={{background: "gray.700"}}
        >
          <AspectRatio ratio={1 / 1}>
        <Image
        roundedTop='lg'
        source={{
          uri: "https://th.bing.com/th/id/OIP.YGJYM4pqXxVMHzPYfdLumgHaHa?rs=1&pid=ImgDetMain",
        }}
        alt='image'
        />
          </AspectRatio>
        </Box>
        <Box 
        onPress={() => navigation.navigate('#')}
        style={styles.ImageStyle}
        shadow={3}
        _light={{backgroundColor: 'gray.50'}}
        _dark={{background: "gray.700"}}
        >
          <AspectRatio ratio={1 / 1}>
        <Image
        roundedTop='lg'
        source={{
          uri:"https://th.bing.com/th/id/OIP.yBSYvJhpAq-k5fER1HlZOwHaHa?pid=ImgDet&w=173&h=173&c=7&dpr=1.3"
        }}
        alt='image'
        />
          </AspectRatio>
        </Box>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    LoginText: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middel:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text2: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 5
    },
    SignupText:{
      fontWeight: 'bold'
    },
    ButtonStyle: {
      marginTop:30,
      marginLeft:15,
      marginRight:15,
    },
    EmailInput:{
      marginTop:10,
      marginRight:5,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    ButtonStyleX: {
      marginTop:12,
      marginLeft:15,
      marginRight:15,
    },
    ButtonDesign: {
      backgroundColor: '#026efd'
    },
    LineStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
      marginRight: 15,
      marginLeft: 15,
    },
    ImageStyle: {
      width: 80,
      height: 80,
      marginLeft: 20,
    },
    BoxStyle: {
      flexDirection: 'row',
      marginTop: 30,
      marginRight: 15,
      marginLeft: 15,
      justifyContent: 'space-around',
    }


  })

