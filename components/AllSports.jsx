import { View, Text, StyleSheet,  TouchableOpacity, ScrollView } from "react-native";
import ExploreSports from "./ExploreSports";
import Footer from "./Footer";
import { X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const AllSports = () => {
  const navigation = useNavigation();

  const handleSportPress = (sport) => {
    if (sport.name === 'Football') {
      navigation.navigate('FootBall');
    }
  };

  return(
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>All Sports</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
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
            onItemPress={handleSportPress}
          />
          <ExploreSports
            title="RACKET SPORTS"
            data={[
              { name: 'Badminton' },  { name: 'Table Tennis' },
              { name: 'Pickle Ball' },{ name: 'Tennis' },
            ]}
            onItemPress={handleSportPress}
          />
          <ExploreSports
            title="ROLLER SPORTS"
            data={[
              { name: 'Skating' }, { name: 'Skateboard' }, { name: 'Scooter' }
            ]}
            onItemPress={handleSportPress}
          />
          <ExploreSports
            title="WATER SPORTS"
            data={[
              { name: 'Swimming' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="FITNESS GYM & YOGA"
            data={[
              { name: 'Fitness & Yoga' }, { name: 'Yoga' }, { name: 'Hula Hoops' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="BOXING & MARTIAL ARTS"
            data={[
              { name: 'Boxing' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="INDOOR GAMES"
            data={[
              { name: 'Carrom' }, { name: 'Chess' }, { name: 'Cards' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="RUNNING & WALKING"
            data={[
              { name: 'Running' }, { name: 'walking' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="TRACK & FIELDS"
            data={[
              { name: 'Track Running' }
            ]}
            onItemPress={handleSportPress}
            />
          <ExploreSports
            title="DANCE NEEDS"
            data={[
              { name: 'Dance Supporters' }
            ]}
            onItemPress={handleSportPress}
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
    paddingTop: 45,
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