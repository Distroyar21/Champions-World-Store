import { View, Text, StyleSheet } from 'react-native'; 
import { ChevronRight } from 'lucide-react-native';

const MenuProductComponents = ({title}) => {
  return (
      <View style={styles.row}>
        <Text style={styles.productComponentText}>{title}</Text>
        <ChevronRight color="#383838" strokeWidth={1.75} />
    </View>
  )
};

const styles = StyleSheet.create({
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#cac8c8',
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: '#fff',
  marginHorizontal: 15,
  marginVertical: 6,
  borderRadius: 12,
},

 productComponentText:{
  color: '#000',
  fontSize: 14,
 }
});

export default MenuProductComponents;