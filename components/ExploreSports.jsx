import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const ExploreSports = ({ onClose }) => {
  
  return (
    <View>
      <Text style={styles.title}>All Sports</Text>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TEAM SPORTS</Text>
          <ChevronRight style={styles.rightArrow} color="#1a34ff" strokeWidth={1.75} />
        </View>
        <FlatList data={[
          { id: '1', name: 'Football' },
          { id: '2', name: 'Basketball' },
          { id: '3', name: 'Baseball' },
          { id: '4', name: 'Hockey' },
          { id: '5', name: 'Volleyball' },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.sportItem}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false}/>
      </View>
      <TouchableOpacity onPress={onClose}></TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 15,
    paddingLeft: 15,
  },

  sectionContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eae9e9',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  sportItem: {
    paddingLeft: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  index: {
    marginHorizontal: 5
  }
});

export default ExploreSports;