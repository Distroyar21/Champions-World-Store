import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const ExploreSports = ({ title, data, onItemPress }) => {

  return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <ChevronRight style={styles.rightArrow} color="#1a34ff" strokeWidth={1.75} />
        </View>
        <View>

          {data.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.sportItem}
              onPress={() => onItemPress && onItemPress(item)}
            >
              <View style={styles.bulletPoint} />
              <Text style={styles.sportName}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eae9e9',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#0052ff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sportItem: {
    paddingLeft: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sportName: {
    fontSize: 14,
    color: '#333',
  },
  bulletPoint: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#727171',
    marginRight: 12,
  },
  rightArrow: {
    marginRight: 5,
  }
});

export default ExploreSports;