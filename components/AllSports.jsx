import { View, StyleSheet,  TouchableOpacity, ScrollView } from "react-native";
import ExploreSports from "./ExploreSports";
import Footer from "./Footer";
import { X } from "lucide-react-native";

const AllSports = ({onClose}) => {
  return(
    <View style={styles.screen}>
      {/* FIXED CLOSE BUTTON: Stays at the top while list scrolls underneath */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <X size={28} color={'#000000'} />
      </TouchableOpacity>
      <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
      
          <ExploreSports
            title="TEAM SPORTS"
            data={[
              { name: 'Football' }, { name: 'Basketball' }, { name: 'Cricket' },
              { name: 'Volleyball' }, { name: 'Hockey' }, { name: 'Baseball' },
              { name: 'Kabaddi' }
            ]}
          />
          <ExploreSports
            title="TEAM SPORTS"
            data={[
              { name: 'Football' }, { name: 'Basketball' }, { name: 'Cricket' },
              { name: 'Volleyball' }, { name: 'Hockey' }, { name: 'Baseball' },
              { name: 'Kabaddi' }
            ]}
          />
          <ExploreSports
            title="TEAM SPORTS"
            data={[
              { name: 'Football' }, { name: 'Basketball' }, { name: 'Cricket' },
              { name: 'Volleyball' }, { name: 'Hockey' }, { name: 'Baseball' },
              { name: 'Kabaddi' }
            ]}
            />
        </View>

        <Footer/>
    </ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  closeButton: {
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 10
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 15,
    },
});

export default AllSports;