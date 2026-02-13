import { View, Text, StyleSheet, Image } from "react-native";
import { Mail, Phone } from "lucide-react-native";

const Footer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>CHAMPIONS WORLD</Text>
        <Text style={styles.text2}>Premium sports gear for athletes of every level</Text>
        <View style={styles.iconContainer}>
         <Image style={styles.socialIcon} source={require('../assets/facebook.png')}/>
         <Image style={styles.socialIcon} source={require('../assets/twitter.png')}/>
         <Image style={styles.socialIcon} source={require('../assets/instagram.png')}/>
         <Image style={styles.socialIcon} source={require('../assets/youtube.png')}/>
        </View>
      </View> 

      <View style={styles.shopSupport}>
        <View style={styles.shop}>
          <Text style={styles.title}>Shop</Text>
          <Text style={styles.text2}>All sports</Text>
          <Text style={styles.text2}>Men</Text>
          <Text style={styles.text2}>Women</Text>
          <Text style={styles.text2}>Kids</Text>
        </View>
        <View style={styles.support}>
          <Text style={styles.title}>Support</Text>
          <Text style={styles.text2}>Privacy Policy</Text>
          <Text style={styles.text2}>Terms & Conditions</Text>
          <Text style={styles.text2}>Refund Policy</Text>
        </View>
      </View>
        <View style={styles.contact}>
          <Text style={styles.title}>Contact</Text>

          <View style={styles.mailPhone}>
            <Mail size={15} strokeWidth={1.75} style={styles.text2}/>
            <Text style={styles.text2}>championsworldChandrapur@gmail.com</Text>
          </View>
          <View style={styles.mailPhone}>
            <Phone style={styles.text2} size={15} strokeWidth={1.5} />
            <Text style={styles.text2}>+91 98765 XXXXX</Text>
          </View>
          
        </View>

        <View style={styles.rightsContainer}>
          <Text style={styles.rightsText}>@ 2026 ChampionsWorld. All Rights Reserved</Text>
          <View style={styles.policy}>
            <Text style={styles.text2}>Privacy Policy</Text>
            <Text style={styles.text2}>Terms & Conditions</Text>
            <Text style={styles.text2}>Refund Policy</Text>
          </View>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0d132c',
    marginTop: 0,
    paddingLeft: 10,
    paddingTop: 25
  },

  container: {
    alignItems: 'start',
    paddingVertical: 15,
  },

  text1: {
    color: '#fff',
    fontSize: 18
  },
  mailPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  text2: {
    fontSize: 13,
    color: '#fff',
    marginTop: 6,
    fontWeight: '200',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    backgroundColor: '#0d132c',
    borderRadius: 50,
  },

  mailIcon: {
    color: '#fff',
    fontSize: 5,
    fontWeight: '200',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 6
  },

  title: {
    fontSize: 16,
    color: '#fff'
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10
  },

  shopSupport: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30
  },

  contact: {
    paddingTop: 20,
  },

  rightsContainer: {
    paddingTop: 30,
    
  },

  policy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginBottom: 25
  },

  rightsText: {
    color: '#fff',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 12,
    borderTopWidth: 0.5,
    borderColor: '#4d5878',
    padding:5,
    marginHorizontal: 10
  }

});

export default Footer;