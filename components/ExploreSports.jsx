import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const ExploreSports = ({ onClose, title, data}) => {

  const RenderRow = ({ index }) => {
    if (!data[index]) return null;
    return (
      <TouchableOpacity style={styles.sportItem}>
        <View style={styles.bulletPoint} />
        <Text style={styles.sportName}>{data[index].name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View>
      <Text style={styles.title}>All Sports</Text>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <ChevronRight style={styles.rightArrow} color="#1a34ff" strokeWidth={1.75} />
        </View>
        <View>
          <RenderRow index={0}/>
          <RenderRow index={1}/>
          <RenderRow index={2}/>
          <RenderRow index={3}/>
          <RenderRow index={4}/>
          <RenderRow index={5}/>
          <RenderRow index={6}/>
        </View>
        
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
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 5
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#0052ff',
  },
  sportItem: {
    paddingLeft: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  index: {
    marginHorizontal: 5
  },
  bulletPoint: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#727171',
    marginRight: 12,
    
  }
});

export default ExploreSports;