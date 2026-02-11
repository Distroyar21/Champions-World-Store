import { View, Text, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>CHAMPIONS WORLD</Text>
        <Text style={styles.text2}>Premium sports gear for athletes of every level</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="instagram" size={22} color="#ffffff" />
          <FontAwesome name="twitter" size={22} color="#ffffff" />
          <FontAwesome name="facebook" size={22} color="#ffffff" />
          <FontAwesome name="youtube" size={22} color="#ffffff" />
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
          <Text style={styles.text2}>championsworldChandrapur@gmail.com</Text>
          <Text style={styles.text2}>+91 98765 XXXXX</Text>
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
    paddingTop: 40
  },

  container: {
    alignItems: 'start',
    paddingVertical: 25,
  },

  text1: {
    color: '#fff',
    fontSize: 18
  },
  text2: {
    fontSize: 13,
    color: '#fff',
    marginTop: 6,
    fontWeight: '200',
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