import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Input, Image, Box, Button, AspectRatio, Icon ,StatusBar} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';



const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Middle}>
        <Text style={styles.SignupText}>Sin up</Text>
      </View>
      <View style={styles.Text2}>
        <Text>You have an acount!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.LoginText}>Login</Text></TouchableOpacity>
      </View>
      { /* UserName or Email Feild */}
      <View style={styles.ButtonStyle}>
        <View style={styles.EmailInput}>
          <Input 
          InputLeftElement={
            <Icon
            as={<FontAwesome5 name='user-secret'/>}
            size='sm'
            m={2}
            _light={{
              color: 'black'
            }}
            _dark={{
              color:'gray.300'
            }}
            />
          }
          variant='outline'
          placeholder='Enter Your Name '
          _light={{placeholderTextColor: 'blueGray.300' }}
          _dark={{placeholderTextColor: 'blueGray.50'}}
          />
        </View>
      </View>
      { /* UserName or Email Feild */}
      <View style={styles.ButtonStyle}>
        <View style={styles.EmailInput}>
          <Input 
          InputLeftElement={
            <Icon
            as={<MaterialCommunityIcons  name='email'/>}
            size='sm'
            m={2}
            _light={{
              color: 'black'
            }}
            _dark={{
              color:'gray.300'
            }}
            />
          }
          variant='outline'
          placeholder='Enter Your Name '
          _light={{placeholderTextColor: 'blueGray.300' }}
          _dark={{placeholderTextColor: 'blueGray.50'}}
          />
        </View>
      </View>
      { /* password */}
      <View style={styles.ButtonStyle}>
        <View style={styles.EmailInput}>
          <Input 
          InputLeftElement={
            <Icon
            as={<FontAwesome5  name='key'/>}
            size='sm'
            m={2}
            _light={{
              color: 'black'
            }}
            _dark={{
              color:'gray.300'
            }}
            />
          }
          variant='outline'
          placeholder='Enter Your Name '
          _light={{placeholderTextColor: 'blueGray.300' }}
          _dark={{placeholderTextColor: 'blueGray.50'}}
          />
        </View>
      </View>
            { /* password */}
      <View style={styles.ButtonStyle}>
        <View style={styles.EmailInput}>
          <Input 
          InputLeftElement={
            <Icon
            as={<FontAwesome5 name='key'/>}
            size='sm'
            m={2}
            _light={{
              color: 'black'
            }}
            _dark={{
              color:'gray.300'
            }}
            />
          }
          variant='outline'
          placeholder='Enter Your Name '
          _light={{placeholderTextColor: 'blueGray.300' }}
          _dark={{placeholderTextColor: 'blueGray.50'}}
          />
        </View>
      </View>
      { /* Button */}
      <View style={styles.ButtonStyle}>
        <Button style={styles.ButtonDesign}>REGISTER NOW</Button>
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
  )
}

export default () => {
  return(
  <NativeBaseProvider>
    <Signup />
  </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#fff',
  },
  Middle:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  SignupText:{
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  Text2:{
    flexDirection: 'row',
    justifyContent:'center',
    paddingTop:5,
  },
  LoginText:{
    fontWeight:'bold',
  },
  ButtonStyle:{
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  EmailInput:{
    marginTop: 10,
    marginRight: 5
  },
  ButtonDesign:{
    backgroundColor:'#026efd'
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