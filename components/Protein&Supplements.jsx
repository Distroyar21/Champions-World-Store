import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MenuProductComponents from './MenuProductComponents';
import { X } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';




const ProteinSupplements = () => {
  const navigation = useNavigation();



  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Proteins & Supplements</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>



          <X size={28} color={'#000000'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MenuProductComponents title="PROTEIN SUPPLEMENTS" />
        <MenuProductComponents title="CREATINE" />
        <MenuProductComponents title="BCAA" />
        <MenuProductComponents title="PRE-WORKOUT" />
        <MenuProductComponents title="WEIGHT GAINERS" />
        <MenuProductComponents title="FAT BURNERS" />
        <MenuProductComponents title="MULTIVITAMINS & SUPPLEMENTS" />
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
    paddingBottom: 10,
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

export default ProteinSupplements;