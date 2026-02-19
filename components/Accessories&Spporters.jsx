import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";


import MenuProductComponents from "./MenuProductComponents";


const AccessoriesSupporters = () => {
  const navigation = useNavigation();



  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Accessories & Supporters</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>



          <X size={28} color={'#000000'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MenuProductComponents title="KNEE SUPPORT" />
        <MenuProductComponents title="ELBOW SUPPORT" />
        <MenuProductComponents title="WRIST SUPPORT" />
        <MenuProductComponents title="ANKLE SUPPORT" />
        <MenuProductComponents title="GYM GLOVES" />
        <MenuProductComponents title="RESISTANCE BANDS" />
        <MenuProductComponents title="WATER BOTTLES" />
        <MenuProductComponents title="SHAKER BOTTLES" />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,

  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  closeButton: {
    padding: 5,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 10,
    paddingBottom: 30, 
  }
});

export default AccessoriesSupporters;