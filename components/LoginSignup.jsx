import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('screen');
const LoginSignup = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Sign In</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <X size={24} color={'#000000'} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.inputText}>Email or Mobile Number</Text>
          <TextInput style={styles.inputPlaceholder} placeholder='Enter email or mobile number' placeholderTextColor={'#565555'}></TextInput>

          <TouchableOpacity>
            <Text style={styles.otpBtn}>Send OTP</Text>
          </TouchableOpacity>
        </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Or Continue With</Text>
            <TouchableOpacity style={styles.gooleBtn}>
              <Image style={styles.googleIcon} source={{uri:'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'}}/>
              <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={styles.signUp}>
              <Text style={styles.accText}>Don't have an account?</Text>
              <TouchableOpacity ><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
            </View>

          </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height ,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginContainer: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: 400,
    margin: 20,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden'
  },

  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text: {
    fontSize: 25,
  },

  inputText: {
    marginTop: 10,
  },

  inputPlaceholder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9c9b9b',
    marginTop: 5,
    paddingHorizontal: 5
  },
  otpBtn: {
    backgroundColor: '#136dfe',
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    color: '#fff',
    textAlign: 'center'
  },

  footer: {
    alignItems: 'center',
    paddingTop: 15
  },

  footerText: {
    color: '#545454'
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },

  signUpText: {
    color: '#136dfe'
  },

  gooleBtn: {
flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    justifyContent: 'center',
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  googleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  }

});

export default LoginSignup;