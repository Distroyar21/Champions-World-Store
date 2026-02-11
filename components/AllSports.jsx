import { View, Text, StyleSheet,  TouchableOpacity, ScrollView } from "react-native";
import ExploreSports from "./ExploreSports";
import Footer from "./Footer";
import { X } from "lucide-react-native";

const AllSports = ({onClose}) => {
  return(
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>All Sports</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <X size={28} color={'#000000'} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false} >
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
            title="RACKET SPORTS"
            data={[
              { name: 'Badminton' },  { name: 'Table Tennis' },
              { name: 'Pickle Ball' },{ name: 'Tennis' },
            ]}
          />
          <ExploreSports
            title="ROLLER SPORTS"
            data={[
              { name: 'Skating' }, { name: 'Skateboard' }, { name: 'Scooter' }
            ]}
            />
          <ExploreSports
            title="WATER SPORTS"
            data={[
              { name: 'Swimming' }
            ]}
            />
          <ExploreSports
            title="FITNESS GYM & YOGA"
            data={[
              { name: 'Fitness & Yoga' }, { name: 'Yoga' }, { name: 'Hula Hoops' }
            ]}
            />
          <ExploreSports
            title="BOXING & MARTIAL ARTS"
            data={[
              { name: 'Boxing' }
            ]}
            />
          <ExploreSports
            title="INDOOR GAMES"
            data={[
              { name: 'Carrom' }, { name: 'Chess' }, { name: 'Cards' }
            ]}
            />
          <ExploreSports
            title="RUNNING & WALKING"
            data={[
              { name: 'Running' }, { name: 'walking' }
            ]}
            />
          <ExploreSports
            title="TRACK & FIELDS"
            data={[
              { name: 'Track Running' }
            ]}
            />
          <ExploreSports
            title="DANCE NEEDS"
            data={[
              { name: 'Dance Supporters' }
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

  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal:15,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },

  closeButton: {
    padding: 5,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#0d132c'
  },

  scrollArea: {
    flex:1,
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: '#f8f9fa'
    },
});

export default AllSports;